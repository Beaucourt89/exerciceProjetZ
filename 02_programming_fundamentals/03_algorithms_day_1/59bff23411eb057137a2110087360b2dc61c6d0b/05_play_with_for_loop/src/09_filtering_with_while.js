// ## Iteration on arrays with filter using while
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.

const literalDigits = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let i = 0;
let arrayLength = literalDigits.length;

while(i < arrayLength ) {
  let val = literalDigits[i] ;
  i++;
  if(i % 2 === 0){
    console.log(val);
  }
}