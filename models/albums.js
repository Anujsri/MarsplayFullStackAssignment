var mongoose = require('mongoose')
  , Schema = mongoose.Schema
let User = require('./user');

// Album Schema
var AlbumSchema = mongoose.Schema({
    userId : {
        type: Schema.Types.Number, 
        ref: 'User'
    },
    title: {
        type: String
    },
    id : {
    	type  : Number,
    	default : 0,
        unique : true
    }
});

module.exports = mongoose.model('Album', AlbumSchema);