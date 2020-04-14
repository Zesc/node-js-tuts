//jshint esversion:6
var stuff = require('./stuff');

//calling fucntion inside another function
function callFunction (fun) {
  fun();
}

let funcExpression = function () {
  console.log("Today Rocks!");
};

//callFunction(funcExpression);

// console.log(stuff.counter(['c', 'e', 's', 'a', 'r']));
// console.log(stuff.adder(3, 2));
// console.log(stuff.adder(stuff.pi, 5));

// Cusrtom Events
let events = require('events');
let util = require('util');

let myEmitter =  new events.EventEmitter();

myEmitter.on('someEvent', function(message){
  console.log(message);
});

//myEmitter.emit('someEvent', "the event was emitted");

let Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

let oscar = new Person('Oscar');
let cesar = new Person('Cesar');
let ross = new Person('Ross');

let people = [oscar, cesar, ross];

people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(person.name + ' said: ' + mssg);
  });
});

//oscar.emit('speak', 'wat up dudes!');

//Read and Write Files (fs)
let fs = require('fs');

//synchronized method
//let readMe = fs.readFileSync('sample.txt', 'utf8');
//fs.writeFileSync('writeme.txt', readMe);

//asyncrhonized method
// fs.readFile('sample.txt', 'utf8', function(err, data) {
//   fs.writeFile('writeme.txt', data, (err) => {});
//   // console.log(data);
// });

//fs.unlink('writeme.txt', (err) => {});


//console.log(readMe);


/*
  CREATING & REMOVING DIRECTORIES
*/

/* Synchronized way to add a directory (rm to remove)
  fs.mkdirSync('stuff');
*/

// asyncrhonized way to make a directory
// fs.mkdir('stuff', () => {
//   fs.readFile('sample.txt', (err, data) => {
//     fs.writeFile('./stuff/writeMe.txt', data, (err)=> {});
//   });
// });

// asyncrhonized way to remove a directory with files inside.
// fs.unlink('./stuff/writeMe.txt', ()=> {
//   fs.rmdir('stuff', (err) => {});
// });
