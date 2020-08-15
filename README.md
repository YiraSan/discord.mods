<div align="center">
  <a href="https://www.npmjs.com/package/discord.mods"><img src="https://img.shields.io/npm/v/discord.mods.svg?maxAge=3600" alt="NPM version" /></a>  
    <a href="https://www.npmjs.com/package/discord.mods"><img src="https://img.shields.io/npm/dt/discord.mpds.svg?maxAge=3600" alt="NPM downloads" /></a><br>
  <a href="https://nodei.co/npm/discord.mods/"><img src="https://nodei.co/npm/discord.mods.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</div>

## Contents

- [Installation](#installation)
- [Example](#example)
- [Links](#links)
- [Help](#help)

## Installation

Execute `npm i discord.mods`, and then install "BetterDiscord", and the betterdiscord plugin for discord.mods [Links](#links).
It's Done!

## Example

**Authentification**

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
```

Alert:

```js
DiscordMods.action.alert("A guild id or a channel id ?", "The targeted user :D", {
  title: "Your Super title",
  subtitle: "The super content :D"
})
```

Toast: (as a android notification)

```js
DiscordMods.action.toast("A guild id or a channel id ?", "The targeted user :D", {
  title: "A ULTRA SUPER MEGA GOD TITLE OMG... and yes... i'm fine",
  type: "danger", // "danger", "success", "warn"
  icon: false, // Active icon in toast ?
  timeout: 5000 // How many time alive ?
})
```

## Links

<a href="https://discordmods.cmtapp.fr/api?v=2&r=download">Download Plugins Here!</a><br>
<a href="https://discordmods.cmtapp.fr/">SiteWeb Here!</a><br>
<a href="https://github.com/YiraSan/discord.mods">GitHub Here!</a><br>
<a href="https://discord.gg/4QwrJmj">Discord Here!</a>

## Help

For Help go to my Discord :D 
And issues : https://github.com/YiraSan/discord.mods/issues
