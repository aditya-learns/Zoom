
module.exports = {
    name:'play',
    aliases:['p'],
    description:'play music',
    category:'music',
    execute(client, message, args)
    {
      client.distube.play(message, args.join(' '))
    }
  }