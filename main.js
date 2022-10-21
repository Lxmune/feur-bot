// Token handling
require('dotenv').config();

const token = process.env.TOKEN;
const clientId = process.env.CLIENTID;
const guildId = process.env.GUILDID;

const { Client, GatewayIntentBits, messageLink, Message } = require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
] });

const { rest } = require('@discordjs/rest');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes("quoi")) {
        message.reply('feur');
        return;
    }
    if (message.content.toLowerCase().includes('aino')) {
        message.reply('harceleur');
        return;
    }
    if (message.content.toLowerCase().includes('sta')) {
        message.reply('ptdr c ki');
        return;
    }
    if (message.content.toLowerCase().includes('owo')) {
        message.reply('UwU');
        return;
    }
    if (message.content.toLowerCase() == "feur") {
        message.reply('ouge');
        return;
    }
    if (message.content.toLowerCase() == "ouge") {
        message.reply('gorge');
        return;
    }
    if (message.content.toLowerCase() == "gorge") {
        message.reply('profonde');
        return;
    }
    if (message.content.toLowerCase() == "profonde") {
        message.reply('ément');
        return;
    }
    if (message.content.toLowerCase() == "ément") {
        message.reply('eur');
        return;
    }
});

client.login(token);