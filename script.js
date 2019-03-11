const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '750204616:AAGU0_aUyLYDgf4dL3Ey0wt0tqE9aBJD784';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg)=>{
    const deadline=1552417200
    const chatId= msg.chat.id;
   const time = new Date(msg.date);
    const  hours= ((deadline-time)/3600).toFixed(0);
    const minutes=((deadline-time)%3600/60).toFixed(0);
    const seconds=((deadline-time)%3600%60%60).toFixed(0);
   bot.sendMessage(chadId,`${hours}:${minutes}:${seconds}`);

});

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   console.dir(msg);
// // if (msg='Привет'){
// //     bot.sendMessage(chatId, 'Привет');
// // }
//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });