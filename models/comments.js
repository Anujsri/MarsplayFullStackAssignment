var mongoose = require('mongoose')
  , Schema = mongoose.Schema
let Post = require('./posts')
// Comment Schema
var CommentSchema = mongoose.Schema({
    postId : {
        type: Schema.Types.Number, 
        ref: 'Post'
    },
    name: {
        type: String
    },
    body: {
        type: String
    },
    email: {
        type: String
    },
    id : {
        type  : Number,
        default : 0,
        unique : true
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
