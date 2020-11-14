const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Movies = new Schema({
    title: {
        type: String
    },
    Vote_Mark: {
        type: Number
    },
    Image: {
        type: String
    }
},{
    collection: 'movies'
});

module.exports = mongoose.model('Movies', Movies);
