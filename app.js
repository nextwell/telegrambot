process.env["NTBA_FIX_319"] = 1;

let TelegramBot = require('node-telegram-bot-api'),
	   schedule = require('node-schedule'),
	  requireFu = require('require-fu');



let intMail = schedule.scheduleJob('*/2 * * * * *', function(){
   //console.log(bot);
});



const token = process.env.API_KEY;

const bot = new TelegramBot(token, {polling: true});


requireFu(__dirname + '/messages')(bot);	// MESSAGES MODULES
requireFu(__dirname + '/actions')(bot);		// ACTIONS MODULES