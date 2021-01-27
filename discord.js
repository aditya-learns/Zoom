
const Discord = require('discord.js');
const client= new Discord.Client();
const WOKCommands = require('wokcommands')
const Perspective = require('perspective-api-client');
const perspective = new Perspective({apiKey:"AIzaSyCDnKgR033P5zJscXW9AsACiwqE2rdHyts"});
require('dotenv').config();
const {Toxic, Sexuality, Insult, spam} = require('./config.json')
const dbOptions = {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}
client.on('ready', () => {
  console.log('I am ready!');
  new WOKCommands(client, {
    commandsDir: 'commands',
    dbOptions
  }).setMongoPath('mongodb://localhost:27017')
  .setBotOwner('419712074441162775')
  .setDefaultPrefix('?')
  .setColor('GREEN')
  .setCategorySettings(
    [
      {
        name:'misc',
        emoji:'💳'
      },
      {
        name:'music',
        emoji:'🎵'
      }
    ]
  )
});

client.login(process.env.DISCORD_TOKEN);
