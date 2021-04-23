'use strict';

//npm install -g nodemon
//npm init
//npm install express

const express = require('express');

let app = express();

app.listen(81, function() {
    console.log('Server is running on port 81!');
});

//app.use();

//GET 
app.get('/', function(request, response) {
    console.log(request.query);
    //response.send("GET :-)");
    response.sendFile(__dirname + '/index.html');
});

app.get('/merHamsterCom.html', function(request, response) {
    console.log(request.query);
    //response.send("GET :-)");
    response.sendFile(__dirname + '/merHamsterCom.html');
});

//POST
app.post('/', function(request, response) {
    console.log(request.query);
    //response.send("POST :-)");
});
