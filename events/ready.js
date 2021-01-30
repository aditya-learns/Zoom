const mongo = require('../mongo.js')
module.exports = async (client) => {

    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    await mongo().then((mongoose) => 
    {
        try 
        {
          console.log('Connected to mongo!')
        } finally 
        {
          mongoose.connection.close()
          console.log('Closed mongo')
        }
    })
    };