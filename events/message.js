const toxic = require('../features/moderation')
module.exports = (client, message, distube) => {

    if (message.author.bot) return;

    const prefix = '?';
    if(eval(message))
    {
        message.reply(`Please don't spam so much`)
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args, distube);
};