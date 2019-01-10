let mongoose = require('mongoose');

// Articles Schema
let moviesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

let Movies = module.exports = mongoose.model('Movies', moviesSchema); 