const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puppySchema = new Schema({
    name: String,
    breed: String,
    age: Number
}, { timestamps: true });

module.exports = mongoose.model('Puppy', puppySchema);