var TelegramBot = require('node-telegram-bot-api');

	var token = '891407324:AAFXpb5Tk7Id32Tf8f-UkrCneHn7cwIC3as';
	var bot = new TelegramBot(token, {polling: true});
  var check = 0;

  var options = {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: 'button1', callback_data: '1' }],
          [{ text: 'button2', callback_data: '2' }],
          [{ text: 'button3', callback_data: '3' }]
        ]
      })
    };

    var messageOptions = {
    parse_mode: "HTML",
    one_time_keyboard: true,
    // disable_web_page_preview: false,
    reply_markup: JSON.stringify({
      keyboard: [
        [{
            text: 'UZB',
            callback_data: 'uzb_language'
        }],
        [{
          text: 'RUS',
          callback_data: 'rus_language'
        }],
        [{
          text: 'ENG',
          callback_data: 'eng_language'
        }]
      ]
      // resize_keyboard: true,
    })
}

  var notes = {
  "hi": 'hello',
  "how_are_you": 'im nice',
  "1": "3",
  "2": "4", 
  "what_you_doing": "nothing",
  "nozim" : "Nozim is superman",
  "maruf": "stupid boy",
  "faha": "pc master",
  "Fotima": "Devona"
};
var notes_uzb = {
  "salom": 'salom',
  "qandaysan": 'yxshi',
  "1": "2",
  "3": "4", 
  "nima_qilayapsan": "hechnima",
  "nozim" : "tanimayman",
  "maruf": "gudak",
  "faha": "matarist" 
};

var notes_rus = {
  "привет": 'здарова',
  "как_дела": 'нормально нереально',
  "1": "6",
  "2": "8", 
  "что_ты_делаешь": "курю",
  "нозим" : "незнаю кто это",
  "маруф": "нормальный патцан",
  "фаха": "баскетболист" 
};

  bot.onText(/\/start/, (msg, match) => {

    const chatId = msg.chat.id;
    console.log('work');
    
    bot.sendMessage(chatId, 'pleas select you language', messageOptions);
  })

  bot.onText(/UZB/, (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[0];
    const text4 = msg.text;
    let text2 = 'siz uzbek tilini tanladingiz, qanday sizga yordam berishim mumkin ?';
    if(check == 0) {
      check = 1;
      lnge = notes_uzb;
      console.log(lnge);
      // console.log(text);
      console.log(text4);
      bot.sendMessage(chatId, text2);
      // bot.sendMessage(chatId, )
    }
  })
  bot.onText(/RUS/, (msg, match) => {
    const chatId = msg.chat.id;
    if(check == 0){
      check = 1;
      lnge = notes_rus;
      bot.sendMessage(chatId, 'вы выбрали русский язык чем я могу вам помочь ?');
    }
  })

  bot.onText(/\/bot (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const resp = match[1];
    var man = msg.from.firstName;
    var lnge = notes;
    
    for(var keys in lnge) {
      if(keys == resp) {
        var hes = lnge[keys];
        console.log(hes);
        // console.log(lnge[keys]);
        // console.log(man);
        bot.sendMessage(chatId, hes);
      }
    }  
  });

bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const chatId = callbackQuery.message.chat.id;
  let text;
  // text = action;
  // let text2 = "you hit button ";
  // let textf = text2 + text;

  if(action == 'uzb_language' && check == 0){
    lnge = notes_uzb;
    check = 1;
    hes = notes_uzb[keys];
    console.log(lnge);
    bot.sendMessage(chatId, 'siz uzbek tilini tanladingiz');
  }
  else if(action == 'rus_language' && check == 0){
    lnge = notes_rus;
    check = 1;
    hes = notes_rus[keys];
    console.log(lnge);
    bot.sendMessage(chatId, 'вы выбрали русский язык');
  }
  else {
    lnge = notes;
    check = 1;
    bot.sendMessage(chatId, 'you select a english language');
  }
});


bot.on('message', function(msg, match){
  const chatId = msg.chat.id;
  const resp = match[0];
  let text3 = 'hello im work';
  if(resp == 'UZB'){
    bot.sendMessage(chatId, text3);
  }
})