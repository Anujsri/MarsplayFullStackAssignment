var mongoose = require('mongoose');
// Award Schema
var UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    address: {
        street: { type: String },
        suite: { type: String },
        city: { type: String },
        zipcode: { type: String },
        geo: {
            lat: { type: Number },
            lng: { type: Number }
        }
    },
    company: {
        name: { type: String },
        catchPhrase: { type: String },
        bs: { type: String }
    },
    id : {
        type : Number,
        default : 0,
        unique: true
    }

});

module.exports = mongoose.model('User', UserSchema);