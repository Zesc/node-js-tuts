//jshint esversion:6

/*
  SETTING UP SERVER IN NODE.JS
*/
let http = require('http');
let fs = require('fs');


/*
let server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1', (err) => {});
console.log('yo dawgs, now listening to port 3000');
*/

/* READABLE STREAMS */
// create a readme.txt file with lots of lorem ipsum text.
// let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// let myWriteStream = fs.createWriteStream(__dirname + '/writMe.txt');

// myReadStream.on('data', (chunk) => {
//   console.log('new chunk received');
//   /* WRITABLE STREAMS */
//   myWriteStream.write(chunk);
//
// });

/* PIPES */
//myReadStream.pipe(myWriteStream);

let server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1', (err) => {});
console.log('yo dawgs, now listening to port 3000');
