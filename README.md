# Telegram Sticker Bot

Telegram Bot that displays sticker when the matching word is sent in a message.

## Setup

in `index.js` set your variables.

`botToken` is your bot Token that BotFather gives you when you create your bot
`matchingWord` is a regexp representing the word(s) you want to match
`stickerId` is the id of the sticker you want to send

To find the stickerId you can send a sticker to your bot and have the bot send the id to you like so:

```javascript
bot.on('message', (msg) => {
	bot.sendMessage(msg.chat.id, msg.sticker.file_id);
});
```

## Usage

```sh
node index.js
```
