const { clear } = require("console");

function fizzBuzz(list) {
  return list.map(array);
}

function array(nombre) {
  if (nombre % 3 === 0 && nombre % 5 === 0) return "FizzBuzz";
  if (nombre % 3 === 0) return "Fizz";
  if (nombre % 5 === 0) return "Buzz";
  return nombre;
}

console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]));

module.exports = fizzBuzz;