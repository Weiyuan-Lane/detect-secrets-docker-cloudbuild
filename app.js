'use strict';

var http = require('http');

API_KEY = "blah-blah-but-actually-not-secret-yes"

API_KEY = "blah-blah-but-actually-not-secret-yes"

console.log('cats');

http.createServer(function (_, res) {
  res.write('Hello World!'); 
  res.end();
}).listen(8080);