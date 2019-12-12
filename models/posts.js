var mongoose = require('mongoose')
  , Schema = mongoose.Schema
let User = require('./user');
// Post Schema
var PostSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    id : {
    	type : Number,
    	default : 0,
        unique : true
    },
    userId : {
        type: Schema.Types.Number, 
        ref: 'User'
    }
});

try{
    module.exports = mongoose.model('Post', PostSchema);
}catch(error){
    console.log("error")
}






