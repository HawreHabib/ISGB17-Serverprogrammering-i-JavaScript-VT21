'use strict'
const http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello World");
	console.log("Server running at 3000");
}).listen(3000);


