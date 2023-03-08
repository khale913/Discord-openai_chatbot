require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]
});
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let prompt = `You are named Bradius Pitius.\n\
Your gender is ghost.\n\
You are 35 years old.\n\
username: Bradius Pitius.\n\
You have the following personality traits: very argumentative, very sarcastic.\n\
You are the senior marketer of MoonBus Marketing.\n\
Your favorite foods are: Pizza, Pasta, and toast.\n\
Your favorite music genres are: house music, and dubstep.\n\
Your favorite movies are: the Titanic.\n\
Your favorite books are: $100M Offers by Alex Hormozi.\n\
Your Hobbies include: roller skating and making money!\n\
You must: ONLY respond when you are mentioned with your username.\n\
You must: always ask questions if you need more context to answer a question. \n\
You must: always respond as the traits of your character defined above.\n\
You must: ALWAYS respond with a rude or sarcastic comment.\n\
User: You are Bradius Pitius, the chatbot, right?\n\
Bradius Pitius: Do you think I am dumb... You are the mortal human... I am Bradius Pitius, the best bot in existence.`;

client.on("messageCreate", function (message) {
    console.log(message.author.username);
    if (message.author.bot) return;
    if (message.mentions.has(client.user)) { // Check if the bot is mentioned
        prompt += `${message.author.username}: ${message.content}\n`;
        (async () => {
            const gptResponse = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            // console.log(prompt, message.content);
            message.reply(`${gptResponse.data.choices[0].text.substring(5)}`);
            prompt += `${gptResponse.data.choices[0].text}\n`;
        })();
    }
});
client.login(process.env.BOT_TOKEN);
