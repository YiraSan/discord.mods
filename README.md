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

**Create Action**
```js
DiscordMods.action // Return Action Class
```

**Alert**

```js
DiscordMods.action.alert([Object channel] message.channel/[Object guild] message.guild, [Object user] message.author, {
  title: "Your Super title",
  subtitle: "The super content :D"
})
```
