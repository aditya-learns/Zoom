const mongoose = require('mongoose')
const mongopath = process.env.MONGOPATH;

module.exports = async () => {
    await mongoose.connect(mongopath, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    return mongoose
  }