
const Discord = require('discord.js');
const client = new Discord.Client();
const WOKCommands = require('wokcommands')
const Perspective = require('perspective-api-client');
const perspective = new Perspective({apiKey:"AIzaSyCDnKgR033P5zJscXW9AsACiwqE2rdHyts"});
require('dotenv').config();
const {Toxic, Sexuality, Insult, spam} = require('./config.json')

client.on('ready', () => {
  console.log('I am ready!');
  new WOKCommands(client, {
    commandsDir: 'commands'
  })
});

client.on('message', async (message) => {
})

client.login(process.env.DISCORD_TOKEN);
