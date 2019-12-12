const axios = require('axios');
let Post = require('../models/posts');

//method to get Post data from jsonplaceholder API
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.data;
    })
    .then((docArray) => {
        let total = docArray.length;
        savePosts(docArray,total);
    })
    .catch((e) => {
        console.log(e)
    })

//function to save Post in our database
function savePosts(docArray, total) {
    for (let i = 0; i < total; i++) {
        let doc = docArray[i];
        post = new Post(doc);
        post.save((err,post)=> {
            if (err && err.code === 11000){
                console.log("Post alredy Exist");
                return;
            }
            console.log("Post saved")
        })
    }
}