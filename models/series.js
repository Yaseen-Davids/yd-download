let mongoose = require('mongoose');

// Articles Schema
let seriesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    episode: {
        type: Number,
        required: true,
    },
    season: {
        type: Number,
        required: true
    }
})

let Series = module.exports = mongoose.model('Series', seriesSchema);