const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    email:String,
})

module.exports = userSchema