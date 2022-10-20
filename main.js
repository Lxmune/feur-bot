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
    if (message.content.endsWith('quoi') || message.content.endsWith('quoi?') || message.content.endsWith('quoi ?')) {
        message.reply('feur');
    }
});

client.login("MTAzMjc1ODc3ODU0Mzc1MTI1MA.GAlAoH.d8PmTU-YHSDHZTVc1lXiQUwW3utA8HLLRsV-js");