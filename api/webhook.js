const TelegramBot = require('node-telegram-bot-api');

/*eslint-env node*/
// https://github.com/yagop/node-telegram-bot-api/issues/319#issuecomment-324963294
// Fixes an error with Promise cancellation
// process.env.NTBA_FIX_319 = 'test';
const stickerId = process.env.STICKER_ID;
const matchingWord = /orge/i;

module.exports = async (request, response) => {
	try {
		const bot = new TelegramBot(process.env.BOT_TOKEN);

		const { message } = request.body;

		if (message && message.text && matchingWord.test(message.text)) {
			await bot.sendSticker(message.chat.id, stickerId);
		}
	}
	catch (error) {
		console.error('Error sending message');
		console.log(error.toString());
	}
	response.send('OK');
};
