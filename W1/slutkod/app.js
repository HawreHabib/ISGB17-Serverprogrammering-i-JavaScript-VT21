'use strict';

//app.js

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

