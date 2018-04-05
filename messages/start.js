let buttons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Посчитать просмотры', callback_data: 'count' }],
      [{ text: 'FAQ', callback_data: 'faq' }]
    ]
  })
};



module.exports = (bot) => {

	bot.onText(new RegExp('\/start'), (msg, match) => {

		let client = msg.chat.id;

		console.log(`ID: ${client} | User starting`)
	  
		let GreetingMsg = "Привет, это тестовый бот для трекинга статистики постов за 24 часа.\n/start - Начало работы. \nЯ тут могу отслеживать статистику постов и отправлять ее вам через 24 часа, как то так."

	  	bot.sendMessage(client, GreetingMsg, buttons);
	});

}