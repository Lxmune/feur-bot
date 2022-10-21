// Token handling
require('dotenv').config();
const token = process.env.TOKEN;

const { Client, GatewayIntentBits, messageLink, Message } = require('discord.js');
const client = new Client({ intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.includes('quoi') || message.content.includes('quoi?') || message.content.includes('quoi ?')) {
        message.reply('feur');
        return;
    }
});

client.login(token);