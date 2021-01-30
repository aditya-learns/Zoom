const Discord = require('discord.js');
const botdash = require('botdash.pro');
const client= new Discord.Client();
const fs = require('fs')
require('dotenv').config();
client.commands = new Discord.Collection();
Distube = require('distube')
client.distube = new Distube(client, {searchSongs : false, emitNewSongOnly: true})
const misc = fs.readdirSync('./commands/misc').filter(file => file.endsWith('.js'));
const moderation = fs.readdirSync('./commands/moderation').filter(file => file.endsWith('.js'));
const music = fs.readdirSync('./commands/music').filter(file => file.endsWith('.js'));

for (const file of misc) {
  console.log(`Loading command ${file}`);
  const command = require(`./commands/misc/${file}`);
  client.commands.set(command.name.toLowerCase(), command);
};

for (const file of moderation) {
  console.log(`Loading command ${file}`);
  const command = require(`./commands/moderation/${file}`);
  client.commands.set(command.name.toLowerCase(), command);
};

for (const file of music) {
  console.log(`Loading command ${file}`);
  const command = require(`./commands/music/${file}`);
  client.commands.set(command.name.toLowerCase(), command);
};

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./distube').filter(file => file.endsWith('.js'));

for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
  console.log(`Loading discord-player event ${file}`);
  const event = require(`./distube/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
};

client.login(process.env.DISCORD_TOKEN);
