
module.exports = {
    name:'stop',
    aliases:['s'],
    description:'stop music',
    category:'music',
    execute(client, message)
    {
        client.distube.stop(message)
    }
  }