const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    uuid: String,
    firstName: String,
    lastName: String,
    username: String,
    profilePicture: String,
    followers: Array,
    following: Array
})

module.exports = mongoose.model("User", userSchema)

