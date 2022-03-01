const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema
//creates a new object called campsiteSchema
//this is a constructor function (like classes without syntactic sugar)

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

//create model
const Campsite = mongoose.model('Campsite', campsiteSchema);
//need capitalized singular version of name of model we want to use- mongoose will look for a plural lowcase
module.exports = Campsite;