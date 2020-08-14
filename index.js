var request = require('sync-request')

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
            var response = JSON.parse(request('POST', this.server+`/api?r=create`, {
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
            this.tools.errorReader(response.code, response.value)
        } catch (error) {
            this.tools.errorReader(0)
        }

        return;

    }

    toast(view, user, {title, type, icon, timeout}) {

        if(!view || !user) return console.log("[DiscordMods] (on create toast) Euhm... Maybe indicate all the fields")

        if(!title) { title = "You did not configure me" }
        if(!timeout) { timeout = 3000 }

        try {
            var response = JSON.parse(request('POST', this.server+`/api?r=create`, {
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
            this.tools.errorReader(response.code, response.value)
        } catch (error) {
            this.tools.errorReader(0)
        }

        return;

    }

}

class Tools {

    constructor (server, bot, key) {
        this.bot = bot
        this.id = this.bot.user.id
        this.server = server
        this.key = key
    }

    errorReader(error, api) {

        if (error == 0) {
            console.log(`[DiscordMods] Connexion Impossible avec l'api (ApiResponse: ${api}) [Code: ${error}]`)
        } else if (error == 4000) {
            console.log(`[DiscordMods] Une information est manquante dans votre demande (ApiResponse: ${api}) [Code: ${error}]`)
        } else if (error == 4001) {
            console.log(`[DiscordMods] L'utilisateur n'est pas connecté (ApiResponse: ${api}) [Code: ${error}]`)
        } else if (error == 3000) {
            console.log(`[DiscordMods] L'api à refusé votre demande (ApiResponse: ${api}) [Code: ${error}]`)
        } else if (error == 3002) {
            console.log(`[DiscordMods] L'api à retourner que la requête n'existait pas (ApiResponse: ${api}) [Code: ${error}]`)
        } else if (error == 200) {
            // ITS OK
        } else if (error == 201) {
            // ITS OK
        } else {
            console.log(`[DiscordMods] Une erreur inconnu c'est produite (ApiResponse: ${api}) [Code: ${error}]`)
        }

        return;

    }

    isConnected(userID) {

        if(!userID) return console.log("[DiscordMods] (on use isConnected function) Euhm... Maybe indicate all the fields")

        var response = ""

        try {
            var body = request("GET", this.server+`/api?r=getstatus&user=${userID}&auth=${this.key}&creator=${this.id}`).getBody();
            response = JSON.parse(body)
            this.errorReader(response.code)
        } catch (error) {
            this.errorReader(0, error)
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
    }

}