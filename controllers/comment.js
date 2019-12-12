const axios = require('axios');
let Comment = require('../models/comments');

//method to get comments data from jsonplaceholder API
axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
        return response.data;
    })
    .then((docArray) => {
        let total = docArray.length;
        saveComments(docArray,total)
    })
    .catch((e) => {
        console.log(e)
    })


//function to save Comments in our database
function saveComments(docArray, total) {
    for (let i = 0; i < total; i++) {
        let doc = docArray[i];
        comment = new Comment(doc);
        comment.save((err,comment)=>{
            if (err && err.code === 11000){
                console.log("Comment alredy Exist");
                return;
            }
            console.log("Comment saved")
        })
    }
}