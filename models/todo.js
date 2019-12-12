var mongoose = require('mongoose')
  , Schema = mongoose.Schema
let User = require('./user');
// Todo Schema
var TodoSchema = mongoose.Schema({
    title: {
        type: String
    },
    completed: {
        type: Boolean
    },
    userId: {
        type: Schema.Types.Number, 
        ref: 'User'
    },
    id : {
        type  : Number,
        default : 0,
        unique : true
    }
});

module.exports = mongoose.model('Todo', TodoSchema);
