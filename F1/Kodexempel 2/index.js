'use strict'
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
	fs.readFile('index.html', function(e, data){
		//res.writeHead(200, {'Content-Type': 'text/plain'});
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);

		return res.end();
	});

	let bookRawData = fs.readFileSync('books.json');
	let books = JSON.parse(bookRawData);
	console.log(books);

	console.log("Server running at 3000");
}).listen(3000);


