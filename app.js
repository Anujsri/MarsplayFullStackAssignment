var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anujdeep:anuj1234@cluster0-jgshs.mongodb.net/assignment?retryWrites=true&w=majority', {
 	useUnifiedTopology: true, useNewUrlParser: true 
}); //it provide  connection with database
const axios = require('axios');
var db = mongoose.connection;

mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

//controller to get user data
require('./controllers/user');
//controller to get album data
require('./controllers/album');
//controller to get todo data
require('./controllers/todo');
//controller to get comment data
require('./controllers/comment');
//controller to get post data
require('./controllers/post');
//controller to get photo data
require('./controllers/photo');
