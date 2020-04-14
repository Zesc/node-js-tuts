//jshint esversion:6
/*
   ROUTING
*/

let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
  console.log('request was made by ' + req.url);
  if(req.url === "/home" || req.url === "/") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/ninjas') {
    var ninjas = [{name: 'Ryu', age: 29}, {name: 'Yoshi', age: 32}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }

  //create contact, 404 pages
});

server.listen(3000, '127.0.0.1');
console.log('server up on port 3000');
