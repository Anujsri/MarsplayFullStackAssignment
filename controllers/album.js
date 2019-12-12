const axios = require('axios');
let Album = require('../models/albums');

//method to get album data from jsonplaceholder API
axios.get('https://jsonplaceholder.typicode.com/albums')
    .then((response) => {
        return response.data;
    })
    .then((docArray) => {
        let total = docArray.length;
        saveAlbums(docArray, total)
    })
    .catch((e) => {
        console.log(e)
    })


//function to save Album in our database
function saveAlbums(docArray, total) {
    for (let i = 0; i < total; i++) {
        let doc = docArray[i];
        album = new Album(doc);
        album.save((err,album)=> {
            if (err && err.code === 11000) {
                console.log("Album alredy Exist");
                return;
            }
            console.log("Album saved")
        })
    }
}