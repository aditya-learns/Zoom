const Discord = require('discord.js')
const client = new Discord.Client();
const Perspective = require('perspective-api-client');
const perspective = new Perspective({apiKey:"AIzaSyCDnKgR033P5zJscXW9AsACiwqE2rdHyts"});
async function eval()
{
    let result = await perspective.analyze(message.content,{attributes: ['toxicity','spam','insult','Sexuality']} );
  if(result.attributeScores.TOXICITY.summaryScore.value > Toxic)
  {
    message.channel.send(`Please don't send toxic messages`)
  }
  else if(result.attributeScores.SPAM.summaryScore.value > spam)
  {
    message.reply(`Please don't spam`);
  }
  else if(result.attributeScores.INSULT.summaryScore.value > Insult)
  {
    message.reply(`Please don't insult anyone`);
  }
  else if(result.attributeScores.SEXUALITY.summaryScore.value > Sexuality)
  {
    message.reply(`Please don't spam`);
  }
}
module.exports.eval = eval;