module.exports = (bot) => {

	bot.onText(new RegExp('\/id'), (msg, match) => {

	  	bot.sendMessage(msg.chat.id, msg.chat.id);
	});
	
}