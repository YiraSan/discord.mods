<div align="center">
  <img src="https://discordmods.cmtapp.fr/discordmods.jpg" height="300px"><br>
  <a href="https://www.npmjs.com/package/discord.mods"><img src="https://img.shields.io/npm/v/discord.mods?style=for-the-badge" alt="Version" /></a>  
  <a href="https://www.npmjs.com/package/discord.mods"><img src="https://img.shields.io/npm/dm/discord.mods?style=for-the-badge" alt="Downloads" /></a><br>
  <a href="https://www.npmjs.com/package/discord.mods"><img src="https://nodei.co/npm/discord.mods.png?downloads=true&stars=true" alt="npm installInfo" /></a>
</div>

# Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Authentification](#authentification)
  - [Action](#action)
  - [Tools](#tools)
  - [Arter](#arter)
- [Links](#links)
- [Help](#help)
- [Register Your Bot](#register-bot)

# Installation

Execute `npm i discord.mods`, and then install "BetterDiscord"...<br> And betterdiscord plugin for discord.mods ... [Links](#links)<br>
It's Ready!

# Usage
How to use ? It's THE question.<br>

## Authentification

```js
const Discord = require('discord.js')
const client = new Discord.Client()

var DM = require('./packages/index')
var DiscordMods = new DM();

client.login("Super-Secret-Token").then(()=>{
    DiscordMods.login(client, "Super-Secret-DiscordMods-Token")
})
```

```js
DiscordMods.action // Return Action Class
DiscordMods.tools // Return Tools Class
DiscordMods.arter // Return Arter Class
```

## Action

### Alert
Create an alert allows you to display a pop-up in an efficient and simple way

```js
DiscordMods.action.alert(Discord.Channel `or` Discord.Guild, Discord.User, {
  title: "Your Super title",
  subtitle: "The super content :D"
})
```

<img src="https://discordmods.cmtapp.fr/example1.png" height="150px">

### Toast
Create a notification

```js
DiscordMods.action.toast(Discord.Channel `or` Discord.Guild, Discord.User, {
  title: "A ULTRA SUPER MEGA GOD TITLE OMG... and yes... i'm fine",
  type: "danger", // "danger", "success", "warn", "info"
  icon: false, // Active icon in the toast ?
  timeout: 5000 // How many time alive ?
})
```

### html
Create an empty pop-up, which can contain html elements

```js
DiscordMods.action.html(Discord.Channel `or` Discord.Guild, Discord.User, {
  html: `html? OK... <img src="i dont know">`
})
```

And if you will change size of window... Color Background of close button... Text of close button...<br>
MaxSize is 2 thirds of the discord window pixel value (separately for width and height)<br>
MinSize is 0px<br>
A fix size is not allowed

```js
DiscordMods.action.html(Discord.Channel `or` Discord.Guild, Discord.User, {
  html: `<img src="https://discordmods.cmtapp.fr/example2.png" height="150px">`,
  minWidth: 400, // you can change "min" to "max"
  minHeight: 200,
  button: "Don't Touch Me",
  color: "magenta"
})
```

<img src="https://discordmods.cmtapp.fr/example3.png" height="150px">

ExampleCeption D:

## Tools

### isConnected (userId)
Check if user is Connected with DiscordMods

```js
await DiscordMods.tools.isConnected(Discord.User.id) // Return true if the user is connected else return false
```

### escapeHtml (html)
Removes html execution from a text containing html

```js
DiscordMods.tools.escapeHtml("<img src='a super image'>") // Instead of displaying the image it displays : "<img src='a super image'>"
```

### markdown (string)
Convert text to markdown

```js
DiscordMods.tools.markdown("**test**") // Return the markdowned text!
```

## Arter



# Links

- <a href="https://discordmods.cmtapp.fr/api?v=2&r=download">Download Plugins</a><br>
- <a href="https://discordmods.cmtapp.fr/">Web</a><br>
- <a href="https://github.com/YiraSan/discord.mods">GitHub</a><br>
- <a href="https://discord.gg/4QwrJmj">Discord</a>

# Help

For Help go to my Discord :D ... [Links](#links)<br> 
And issues : https://github.com/YiraSan/discord.mods/issues

# Register Bot

Reback soon!