const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('Successfully connected to MongoDB')})
.catch((err) => {console.error('Connection failed..', err)})

module.exports = mongoose
