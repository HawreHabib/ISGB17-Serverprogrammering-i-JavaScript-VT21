'use strict';

//app.js
//node_modules är inte med i git så för att ladda ner alla paket skriv:
//npm install
//npm kommer då att titta i package.json och ladda ner det som behövs.

const express = require('express');
const bodyParser = require('body-parser');
const jsDOM = require('jsdom');
const fs = require('fs');

let app = express();

//Två middleware: ett för express och ett för body-parser
app.use('/public', express.static(__dirname + '/static') );
app.use(bodyParser.urlencoded({extended : true}));

app.listen(81, function() {
    console.log('Server is running on port 81!');
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/static/html/index.html');
});

app.post('/', function(request, response) {

    fs.readFile(__dirname + '/static/html/index.html', function(error, data) {

        if( error ) {
            response.status(500);
            response.send('500 Server error');
        } else {

            let htmlCode = data;

            let serverDOM = new jsDOM.JSDOM(htmlCode)
            let bodyNodeRef = serverDOM.window.document.querySelector('body');
            let olNodeRef = serverDOM.window.document.createElement('ol');

            let liNodeRef = null;
            let liTextNodeRef = null;

            let nbr = 42;
            let nickname = 'Douglas';

            console.table( request.body );

            if(request.body.antal !== undefined && !isNaN(request.body.antal) ) {
                let intNbr = parseInt( request.body.antal );
                if(intNbr >= 1 && intNbr <= 100) {
                    nbr = intNbr;
                }
            } else {
                console.log('Alla villkor är inte uppfyllda...');
            }

            if(request.body.nickname !== undefined && request.body.nickname.length >= 2) {
                nickname = request.body.nickname;
            } else {
                console.log('Alla villkor är inte uppfyllda...');
            }

            for(let i = 0; i < nbr; i++) {

                liNodeRef = serverDOM.window.document.createElement('li');
                liTextNodeRef = serverDOM.window.document.createTextNode(nickname);
                
                liNodeRef.appendChild(liTextNodeRef);
                olNodeRef.appendChild(liNodeRef);

            }

            bodyNodeRef.appendChild(olNodeRef);
            htmlCode = serverDOM.serialize();

            response.send( htmlCode );

        }

    });

});
