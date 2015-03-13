var http = require('http');

http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello from GIT version 2.')
  res.end();
}).listen(8000); 
console.log('> hello world running on port 8000');
