module.exports = {
    aliases: ['p'],
    description:'Ping',
    category:'misc',
    callback: ({ message }) => {
      message.reply('pong')
    }
  }