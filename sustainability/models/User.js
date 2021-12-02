const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({

    //Each user will have a username and password
    //They will also have a list of their food items and how long till they go bad
    UserName: String,
    Password: String,
    Phone: Number,
    List: [{
        Name: String,
        Date: Date,
    }]

 });


const Film = mongoose.model('User', userSchema);

module.exports = User;