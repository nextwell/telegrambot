module.exports = (bot) => {

	bot.on('callback_query', function (msg) {
		let client = msg.from.id;

		if ( msg.data == 'faq') {
			bot.sendMessage(client, "Это FAQ")
		}
		else if ( msg.data == 'count'){
			bot.sendMessage(client, "Введите (без <>)\n/link <ссылка>");
		}
	});

}