const axios = require('axios');
let Photo = require('../models/photos');

//method to get Photo data from jsonplaceholder API
axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
        return response.data;
    })
    .then((docArray) => {
        let total = docArray.length;
        savePhotos(docArray,total);
    })
    .catch((e) => {
        console.log(e)
    })

//function to save Photo in our database
function savePhotos(docArray, total) {
    for (let i = 0; i < total; i++) {
        let doc = docArray[i];
        photo = new Photo(doc);
        photo.save((err,photo)=> {
            if (err && err.code === 11000){
                console.log("Photo alredy Exist");
                return;
            }
            console.log("Photo saved")
        })
    }
}