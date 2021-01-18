// LIB IMPORT

var Return = require('./lib/Return')

function pfs(ident="**", dif="strong", c="") {

    var c2 = c.split(ident)

    if (c2.length < 3) return c;

    var final = "";

    for (let i = 1; i < c2.length; i+=2) {

        final += c2[i-1]
        final += `<${dif}>${c2[i]}</${dif}>`
        final += c2[i+1]

    }

    return final;

}

class Action {

    constructor (socket) {
        this.socket = socket;
    }

    toast(to, user, object={
        title: "Work!",
        icon: true,
        type: "success",
        timeout: 4000,
    }) {
        
        var data = {
            type: "push",
            to: to.id,
            object: object,
        }

        this.socket.emit("request", "json", user.id, data);
        
        return new Return(true);

    }

    alert(to, user, object={
        title: "Example",
        subtitle: "Work too!"
    }) {
        
        var data = {
            type: "alert",
            to: to.id,
            object: object,
        }

        this.socket.emit("request", "json", user.id, data);
        
        return new Return(true);

    }

    html(to, user, object={
        html: `Touch my Tralala`,
        minWidth: 400, 
        minHeight: 200,
        maxWidth: 400, 
        maxHeight: 200,
        button: "My Ding Ding Dong",
        color: "magenta"
    }) {
        
        var data = {
            type: "html",
            to: to.id,
            object: object,
        }

        this.socket.emit("request", "json", user.id, data);
        
        return new Return(true);

    }

}

class Tools {

    constructor (socket) {
        this.socket = socket;
    }

    escapeHtml(text) {
        var map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };
        
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }

    markdown(content) {
        var content = pfs("**", "strong", content)
        var content = pfs("*", "em", content)
        var content = pfs("__", "u", content)
        var content = pfs("_", "em", content)
        var content = pfs("~~", "s", content)
        return content;
    }

    isConnected(id) {

        return new Promise(resolve => {
          
            var f = (...args) => {
                if (args[0] == "online") {
                    resolve(args[1])
                    this.socket.off("response", f)
                }
            }

            this.socket.on("response", f)

            this.socket.emit("request", "online", id)
            
        })
        
    }

}

class Arter {

    /** 
    * @name Arter
    * @author YiraSan
    * @version 1.0.5
    * @description Complete personnalisation of your themes
    */

    constructor(socket) {
        this.socket = socket;
    }

    editCSS(to, user, object={
        popoutModalBrightness: 0.75,
        popoutModalImage: `var(--background-image)`,
        popoutModalBlur: `5px`,
        popoutModalSize: `cover`,
        popoutModalPosition: `center`,
        backgroundColor: `transparent`,
        backgroundImage: `url('https://arter.cmtapp.fr/?img')`,
        backgroundImageBlur: `5px`,
        windowPadding: `0px`,
        windowRoundess: `0px`,
        textShadow: 1,
        embedBorder: `none`,
        colorPrimary: `252,68,18`,
        colorSecondary: `252,132,18`,
        colorDirection: `320deg`,
        scrollbarColor: `rgba(255,255,255,0.05)`,
        linkColor: `#00b0f4`,
    
    }) {
        
        var data = {
            type: "arter",
            to: to.id,
            object: object,
        }

        this.socket.emit("request", "json", user.id, data);
        
        return new Return(true);

    }

}

module.exports = class {

    constructor() {
        this.socket = require('socket.io-client')("https://dms.cmtchat.online/");

        this.socket.on("disconnect", () => {
            console.log("[DiscordMods] Disconnected of DiscordMods Server")
        })
    }

    get tools() {
        return new Tools(this.socket);
    }

    get action() {
        return new Action(this.socket);
    }

    get arter() {
        return new Arter(this.socket);
    }

    login(client, token) {

        var id = client.user.id;

        this.socket.emit("user", "bot", id)
        this.socket.emit("token", token)

        this.socket.on("connect", ()=>{
            this.socket.emit("user", "bot", id)
            this.socket.emit("token", token)
            console.log("[DiscordMods] Reconnected to the DiscordMods Server")
        })

        return new Return(false, this);
    }

}