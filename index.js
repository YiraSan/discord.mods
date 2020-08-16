var request = require('sync-request')

// LIB IMPORT

var Return = require('./lib/Return')
var errorReader = require('./lib/errorReader')

class Action {

    constructor (server, bot, tools, key) {
        this.bot = bot
        this.id = bot.user.id
        this.server = server
        this.tools = tools
        this.key = key
    }
    
    alert(view, user, {title, subtitle}) {

        if(!view || !user) return console.log("[DiscordMods] (on create alert) Euhm... Maybe indicate all the fields")

        if(!title) { title = "Example" }
        if(!subtitle) { subtitle = "You did not configure me" }

        try {
            var response = JSON.parse(request('POST', this.server+`/api?r=create&v=2`, {
                json: {
                    user: user.id,
                    channel: view.id,
                    type: 'alert',
                    creator: this.id,
                    params: {
                        title: title,
                        subtitle: subtitle
                    }
                },
                headers: {
                    'auth': this.key
                }
              }).getBody());
            errorReader(response.code, response.value)
            return new Return(false, this);
        } catch (error) {
            errorReader(null, error)
            return new Return(true, this, error);
        }

    }

    toast(view, user, {title, type, icon, timeout}) {

        if (!view || !user) return console.log("[DiscordMods] (on create toast) Euhm... Maybe indicate all the fields")

        if (!title) { title = "You did not configure me" }
        if (!timeout) { timeout = 3000 }
        if (!type) { type = "danger" }
        if (!icon) { icon = false }
        if (typeof icon != "boolean") { icon = false }

        try {
            var response = JSON.parse(request('POST', this.server+`/api?r=create&v=2`, {
                json: {
                    user: user.id,
                    channel: view.id,
                    type: 'toast',
                    creator: this.id,
                    params: {
                        title: title,
                        type: type,
                        icon: icon,
                        timeout: timeout
                    }
                },
                headers: {
                    'auth': this.key
                }
            }).getBody());
            errorReader(response.code, response)
            return new Return(false, this);
        } catch (error) {
            errorReader(null, error)
            return new Return(true, this, error);
        }

    }

    inputHtml(view, user, {title, html}) {

        if (!view || !user) return console.log("[DiscordMods] (on create html) Euhm... Maybe indicate all the fields")

        if (!html) { html = "You did not configure me" }

        var cr;

        if (!title) {

            cr = {
                "user": user.id,
                "channel": view.id,
                "type": 'html',
                "creator": this.id,
                "params": {
                    "html": html
                }
            }

        } else {

            cr = {
                "user": user.id,
                "channel": view.id,
                "type": 'html',
                "creator": this.id,
                "params": {
                    "title": title,
                    "html": html
                }
            }

        }

        try {
            var response = JSON.parse(request('POST', this.server+`/api?r=create&v=2`, {
                json: cr,
                headers: {
                    'auth': this.key
                }
            }).getBody());
            errorReader(response.code, response.value)
            return new Return(false, this);
        } catch (error) {
            errorReader(null, error)
            return new Return(true, this, error);
        }

    }

}

class Tools {

    constructor (server, bot, key) {
        this.bot = bot
        this.id = this.bot.user.id
        this.server = server
        this.key = key
    }

    custom(req={}) {

        if(!view || !user) return console.log("[DiscordMods] (on create toast) Euhm... Maybe indicate all the fields")

        if(!title) { title = "You did not configure me" }
        if(!timeout) { timeout = 3000 }

        try {
            var response = JSON.parse(request('POST', this.server+`/api?r=create`, {
                json: req,
                headers: {
                    'auth': this.key
                }
            }).getBody());
            errorReader(response.code, response.value)
            return new Return(false, this);
        } catch (error) {
            errorReader(null, error)
            return new Return(true, this, error);
        }

    }

    createSession() {

        return console.log("[DiscordMods] TODO FUNCTION") // Return ID of session

    }

    awaitReply(reply_id, then=function(replyContent){}) {

        return console.log("[DiscordMods] TODO FUNCTION")

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

    isConnected(userID) {

        if(!userID) return console.log("[DiscordMods] (on use isConnected function) Euhm... Maybe indicate all the fields")

        var response = ""

        try {
            var body = request("POST", this.server+`/api?r=getstatus&v=2`, {
                json: {
                    user: userID,
                    creator: this.id
                },
                headers: {
                    'auth': this.key
                } 
            }).getBody();
            response = JSON.parse(body)
            errorReader(response.code)
        } catch (error) {
            errorReader(null, error)
            return new Return(true, this, error);
        }

        if (response.status == false) {
            return false;
        } else if (response.status == true) {
            return true;
        } else if (response.status == null) {
            return null;
        }

        return;
        
    }

}

module.exports = class DiscordMods {

    constructor(bot) {
        this.bot = bot
        this.server = "https://discordmods.cmtapp.fr"
        this.key = "none";
    }

    get tools() {
        return new Tools(this.server, this.bot, this.key);
    }

    get action() {
        return new Action(this.server, this.bot, this.tools, this.key);
    }

    login(key) {
        this.key = key;

        return new Return();
    }

}