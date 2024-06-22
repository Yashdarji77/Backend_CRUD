const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://yash2403:yash2403@cluster0.1hn2feb.mongodb.net/testapp").then(()=>{
    console.log("connected successfully")
})

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.model('user', userSchema);
