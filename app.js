'use strict';

var http = require('http');

http.createServer(function (_, res) {
  res.write('Hello World!'); 
  res.end();
}).listen(8080);