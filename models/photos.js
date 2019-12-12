var mongoose = require('mongoose')
  , Schema = mongoose.Schema
let Album = require('./albums');
// Photo Schema
var PhotoSchema = mongoose.Schema({
    albumId : {
        type: Schema.Types.Number, 
        ref: 'Album'
    },
    thumbnailUrl: {
        type: String
    },
    url: {
        type: String
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

module.exports = mongoose.model('Photo', PhotoSchema);
