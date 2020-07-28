'use strict';

var http = require('http');

API_KEY = "blah-blah-but-actually-not-secret-yes"

ANOTHER_API_KEY = "12xkasasd,m-1232cal;sd"

http.createServer(function (_, res) {
  res.write('Hello World!'); 
  res.end();
}).listen(8080);