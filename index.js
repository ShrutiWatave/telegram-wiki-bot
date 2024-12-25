const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

const TELEGRAM_BOT_TOKEN = '7265836590:AAH0F2M9To1c2ntRaDz-LeChKnS4iagZYmE';
// const TELEGRAM_CHAT_ID = '-4265761827';

// Creating a bot the uses polling to fetch new updates
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
if(bot){
    console.log("Bot is running!");
}

// Getting the random wikipedia article
async function getRandomWikiArticle() {
    const url = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
    try{
        const response = await axios.get(url);
        return response.data
    }catch{
        throw new Error('Failed to fetch the Wikipedia article.');
    }
}

// Posting the article to the telegram group
async function postToTelegramChat(chatId, article) {
    const message = `*Random Wiki Article*\n\n*Title: ${article.title}*\n\n*Summary: *${article.extract}\n\n[Read more](${article.content_urls.desktop.page})`;
    await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
}

// Listener for the /wikiarticle command
bot.onText(/\/wikiarticle/, async (msg) => {
    const chatId = msg.chat.id;
    try {
        const article = await getRandomWikiArticle();
        await postToTelegramChat(chatId, article);
        console.log('Article posted to Telegram!');
    } catch (error) {
        console.error('Error:', error);
        bot.sendMessage(chatId, 'Error in fetching the article.');
    }
});