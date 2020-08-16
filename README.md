<div align="center">
  <img src="https://discordmods.cmtapp.fr/discordmods.jpg">
  <a href="https://www.npmjs.com/package/discord.mods"><img src="https://img.shields.io/npm/v/discord.mods.svg?maxAge=3600" alt="NPM version" /></a>  
    <a href="https://www.npmjs.com/package/discord.mods"><img src="https://img.shields.io/npm/dt/discord.mpds.svg?maxAge=3600" alt="NPM downloads" /></a><br>
  <a href="https://nodei.co/npm/discord.mods/"><img src="https://nodei.co/npm/discord.mods.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</div>

# Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Authentification](#authentification)
  - [Action](#action)
  - [Tools](#tools)
- [Links](#links)
- [Help](#help)
- [Register Your Bot](#register-bot)

# Installation

Execute `npm i discord.mods`, and then install "BetterDiscord", and the betterdiscord plugin for discord.mods [Links](#links)<br>
It's Done!

# Usage

## Authentification

```js
var Discord = require('discord.js')
var dp = require('discord.mods')
var client = new Discord.Client()

client.login("SuperSecretDiscordToken")
var DiscordMods = new dp(client)
DiscordMods.login("SuperSecretDiscordModsToken")

client.on("message", message => {
    // YOUR BEAUTIFUL CODE
})
```

```js
DiscordMods.action // Return Action Class
DiscordMods.tools // Return Tools Class
```
## Action

### Alert

```js
DiscordMods.action.alert("A guild id or a channel id ?", "The targeted user :D", {
  title: "Your Super title",
  subtitle: "The super content :D"
})
```

<img src="https://discordmods.cmtapp.fr/example1.png" height="150px">

### Toast 
As a android notification.

```js
DiscordMods.action.toast("A guild id or a channel id ?", "The targeted user :D", {
  title: "A ULTRA SUPER MEGA GOD TITLE OMG... and yes... i'm fine",
  type: "danger", // "danger", "success", "warn"
  icon: false, // Active icon in toast ?
  timeout: 5000 // How many time alive ?
})
```

### inputHtml

```js
DiscordMods.action.inputHtml(message.guild, message.mentions.members.first().user, {
  title: "i am a optionnal title :D", // title optionnal
  html: `html? OK... <img src="i dont know">`
})
```

## Tools

### isConnected
**Check if user is Connected with DiscordMods**

```js
DiscordMods.tools.isConnected("id of a user") // Return true if user is connected else return false
```

### espaceHtml

```js
DiscordMods.tools.escapeHtml("<img src='a super image'>") // Instead of displaying the image it displays : "<img src='a super image'>"
```

### request

# Links

- <a href="https://discordmods.cmtapp.fr/api?v=2&r=download">Download Plugins</a><br> (It's only in French for now)
- <a href="https://discordmods.cmtapp.fr/">Web</a><br>
- <a href="https://github.com/YiraSan/discord.mods">GitHub</a><br>
- <a href="https://discord.gg/4QwrJmj">Discord</a>

# Help

For Help go to my Discord :D ... [Links](#links)<br> 
And issues : https://github.com/YiraSan/discord.mods/issues

# Register Bot

You can go to `https://discordmods.cmtapp.fr/botkey?id=ID OF BOT`
And just follow the instructions given by the API.

If you have this:
```json
{"code":2004,"assetcode":1234}
```

You will have to rename your bot with the "assetcode"
And refresh page... Your bot is register!