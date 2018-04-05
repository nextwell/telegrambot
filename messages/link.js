let cheerio = require('cheerio');
	request = require('request');


let links = [];


function is_ok(url, callback){
	let iframe = '?embed=1';
	if ( url.indexOf(iframe) == -1){
		url = `${url}?embed=1`;
	}
	request(url, (error, response, html) => {
	  	if ( !error ){

	  		let _$ = cheerio.load(html);
	  		let count = _$('.tgme_widget_message_views').text();
	  		if ( count == ''){
	  			callback({status: "failed"});
	  		}
	  		else callback({status: "success", value: count});
	  	}
	});
}


module.exports = (bot) => {
	bot.onText(/\/link (.+)/, (msg, match) => {

		let link   = match[1],
	  		client = msg.chat.id;

	  	links.push(link);

	  	is_ok(link, (data) => {
	  		if ( data.status == "success"){
	  			bot.sendMessage(client, "Ссылка верна, отчет будет отправлен через 24 часа")
	  			console.log(`ID: ${msg.chat.id} | Новая ссылка: <${link}>`);
	  		}
	  		else {
	  			bot.sendMessage(client, "Неверная ссылка, повторите попытку!")
	  		}
	  	});
	});
}