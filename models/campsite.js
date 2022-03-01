const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema
//creates a new object called campsiteSchema
//this is a constructor function (like classes without syntactic sugar)
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
    //will get a timestap when created and updated
});

//create model
const Campsite = mongoose.model('Campsite', campsiteSchema);
//need capitalized singular version of name of model we want to use- mongoose will look for a plural lowcase
module.exports = Campsite;