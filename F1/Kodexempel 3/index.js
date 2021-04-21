'use strict'

const http = require('http');
const fs = require('fs');
const uc = require('upper-case');


//Skapar servern
http.createServer(function(req, res){
	//Lägger till HTTP header. Vi berättar för servern att visa sidan som HTML
	res.writeHead(200, {'Content_Type': 'text/html'});

	//uc.upperCase tar enbart emot strängar
	let html = fs.readFileSync('index.html').toString();

	//Ändrar texten till uppercase
	html = uc.upperCase(html);

	//Samma sak som ovan
	//html = html.toUpperCase();
	res.end(html);

	//Loggar ut så vi vet att servern körs
	console.log("Server running at port 3000");
}).listen(3000);
