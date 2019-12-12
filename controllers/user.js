const axios = require('axios');
let User = require('../models/user');

//method to get User data from jsonplaceholder API
axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.data;
    })
    .then((docArray) => {
        let total = docArray.length;
        saveUsers(docArray,total)
    })
    .catch((e) => {
        console.log(e)
    })

//function to save User in our database
function saveUsers(docArray, total) {
    for (let i = 0; i < total; i++) {
        let doc = docArray[i];
        user = new User(doc);
        user.save((err,user)=> {
            if (err && err.code === 11000) {
                console.log("User already Exist");
                return;
            }
            console.log("Users saved");
        })
    }
}
