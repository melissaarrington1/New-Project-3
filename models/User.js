const mongoose = require('../db/connections')
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    favoriteCity: String
})

module.exports = mongoose.model("User", User)