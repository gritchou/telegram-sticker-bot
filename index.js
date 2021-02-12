const TelegramBot = require('node-telegram-bot-api');

/*eslint-env node*/
const botToken = process.env.BOT_TOKEN;
const stickerId = process.env.STICKER_ID;
const matchingWord = /orge/i;

const bot = new TelegramBot(botToken, { polling: true });

bot.onText(matchingWord, (msg) => {
	bot.sendSticker(msg.chat.id, stickerId);
});
