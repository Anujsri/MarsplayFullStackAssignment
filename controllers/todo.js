const axios = require('axios');
let Todo = require('../models/todo');

//method to get todos data from jsonplaceholder API
axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        return response.data;
    })
    .then((docArray) => {
        let total = docArray.length;
        saveTodos(docArray,total);
    })
    .catch((e) => {
        console.log(e)
    })


//function to save Todo in our database
function saveTodos(docArray, total) {
    for (let i = 0; i < total; i++) {
        let doc = docArray[i];
        todo = new Todo(doc);
        todo.save((err,todo)=> {
            if (err && err.code === 11000){
                console.log("Todo alredy Exist");
                return;
            }
            console.log("Todo saved")
        })
    }
}