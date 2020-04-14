//jshint esversion:6

let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  let myReadStream = fs.createReadStream(__dirname + '/index.html');

  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1', (err) => {});
console.log('server up on port 3000');
