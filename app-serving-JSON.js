//jshint esversion:6

let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});

  let myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };

  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('server up on port 3000');
