
//https://devdocs.io/node/

'use strict';

//Funktionalitet som finns med som standard i Node! 
//Därav behöver vi inte installera ngt paket!
const http = require('http');
const fs = require('fs');

exports.myServer = function () {

    http.createServer( function(req,res) {

        let filnamn;
        //res.writeHead(200, {'Content-Type': 'text/html' }); 
        //Vad betyder detta för vår applikation? Provkör -> F12!

        if(req.url==='/') {
            filnamn='index.html';
        }
        else {
            filnamn = req.url;
            console.log('filnamn:' + filnamn);
            filnamn = filnamn.substr(1);
            console.log('filnamn:' + filnamn);
        }

        let isText = true;
        let dotPosition = filnamn.lastIndexOf('.');
        let ext = filnamn.substring(dotPosition + 1);

        if(ext === 'html') {
            res.writeHead(200, {'Content-Type': 'text/html' }); 
        }

        if(ext === 'css') {
            res.writeHead(200, {'Content-Type': 'text/css' }); 
        }

        if(ext === 'svg') {
            res.writeHead(200, {'Content-Type': 'image/svg+xml' }); 
        }

        if(ext === 'js') {
            res.writeHead(200, {'Content-Type': 'text/javascript' }); 
        }

        if(ext === 'ico') {
            res.writeHead(200, {'Content-Type': 'image/x-icon' });
            isText = false; 
        }

        //readFileSync -> Vad betyder det för vår applikation? jmf readFile()!
        console.log(Date.now());

        let content = fs.readFileSync(filnamn);
        
        if(isText) {
            content.toString()
        }
        console.log(Date.now());

        res.write(content);
        
        res.end(); 
    
    }).listen(81);

}
