'use strict';

const http = require('http');
const fs = require('fs');

exports.myServer = function () {
    http.createServer(function(req,res) {

        let filnamn;
        res.writeHead(200, {'Content-Type': 'text/html' });

        if(req.url==='/') {
            filnamn='index.html';
        }
        else {
            filnamn = req.url;
            console.log('filnamn:' + filnamn);
            filnamn = filnamn.substr(1);
            console.log('filnamn:' + filnamn);
        }

        let content = fs.readFileSync(filnamn).toString();
        res.write(content);
        res.end(); 
    
    }).listen(3002);

}