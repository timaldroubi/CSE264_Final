const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const filmSchema = new mongoose.Schema({
    FilmID: Number,
    Title: String,
    Body: String,
    Date: {
        type: Date,
        default: Date.now,
    },
    Reviews: [
        {
        ReviewID: Number,
        Title: String,
        Body: String,
        Date: {
            type: Date,
            default: Date.now,
        }
     }
    ]
 });


 /*
     film_ID: {
        type: Number,
       // required: true,
        unique: true,
    },
    */
   /*"ReviewID": Number, 
    "Title": String, 
    "Body": String,
    "Date": Date */


const Film = mongoose.model('Film', filmSchema);


module.exports = Film;
