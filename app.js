'use strict';

var http = require('http');

API_KEY = "blah-blah-but-actually-not-secret"

http.createServer(function (_, res) {
  res.write('Hello World!'); 
  res.end();
}).listen(8080);