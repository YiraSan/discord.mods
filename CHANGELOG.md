# 0.3.2

- title in inputHtml are delete
- Change color of the "inputHtml" button (with "color" parameters)
- Change text of the "inputHtml" button (with "text" parameters)
- Change size of the "inputHtml" window (show example, size in pixel)

```js
DiscordMods.action.inputHtml({
    html: "HTML HERE!",
    color: "yellow", // WoW! A yellow button! (#?????? it's valid) 
    text: "Don't Touch Me",
    maxWidth: 800, // Max is 2 thirds of the discord window pixel value (separately for width and height)
    maxHeight: 800,
    minWidth: 100,
    minWidth: 100
})
```

# 0.3.1

- API v2 it's here! (upgrade speed, fluidity & multi-support)
- The Action "inputHtml" add! (create a Window with your html) [WARNING: IF YOU INCLUDES `<script>` in your html, the client plugins execute escapeHtml function on your content/html]
- Add "escapeHtml" in Tools : The function is used to prevent the execution of html in content running html. Useful if you include user content (for security)

```js
DiscordMods.action.inputHtml({
    html: "HTML HERE!",
    title: "A title?" // title parameters is optionnal (add title in window, as Alert), title don't support html!
})
```

- Patch Error Log

# 0.3.0

- Catch/Then & Finnally is here
- Restructure Packages
- Preparing for API v2 compatibility
- Add Custom POST Json Request in Tools

```js
DiscordMods.tools.request({
    user: "you or me ? (id)",
    channel: "The channel or guild?",
    type: 'alert', // "toast"/"alert"/"html"
    params: {
        title: "Your Super Title!",
        subtitle: "The content of alert?"
    }  
})
```

- The Packages is only in english now

# 0.2.9

- Initial Commit in npm.js & github

# 0.2.8 (and lower)

Which gave the 0.2.8