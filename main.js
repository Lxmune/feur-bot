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
      if (message.content.toUpperCase().includes() == "QUOI") {
          message.reply('feur');
          return;
      }
      if (message.content.includes('aino')) {
          message.reply('harceleur');
          return;
      }
        if (message.content.includes('sta')) {
          message.reply('ptdr c ki');
          return;
      }
});

module.exports = class Main {
    
}

client.login(token);