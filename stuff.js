//jshint esversion:6

let counter = function (arr) {
  return "There is " + arr.length + " elements in this array.";
};

let adder = function (a, b) {
  return `The sum of these two numbers is ${a + b}`;
};

let pi = 3.142;

//counter(["cesar", "daniel", "verastegui"]);
//console.log(adder(1,2));

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
