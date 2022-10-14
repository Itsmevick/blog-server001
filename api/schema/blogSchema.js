const mongoose = require('mongoose');
const moment = require('moment')
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    author: String,
    content: String,
    category: String,
    date: {
        type: String,
        default: moment().format("MMM Do YY"),
    },
    coverart: {
        data: Buffer,
        type:  String,
        default: 'http://192.168.100.103:5173/src/assets/business_general_2.jpg',
    },
});


module.exports = mongoose.model('blog', blogSchema);