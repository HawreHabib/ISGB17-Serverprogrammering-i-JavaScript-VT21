'use strict';

//npm install -g nodemon

//npm init
//npm install express
//eller om package.json filen finns med...
//npm install

const express = require('express');

let app = express();

app.listen(81, function() {
    console.log('Server is running on port 81!');
});

//GET 
app.get('/', function(request, response) {
    console.log(request.query);
    response.send("GET :-)");
});

//POST
app.post('/', function(request, response) {
    console.log(request.query);
    response.send("POST :-)");
});

