// ## Decreasing Iteration on arrays using while
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// for(let i = litteralDigits.length - 1; i >= 0 ; i--){
//   console.log(litteralDigits[i]);
// }
let i = 0;
let arrayLength = litteralDigits.length;

while(arrayLength  > i ) {
  let val = litteralDigits[arrayLength - 1];
  arrayLength--;
  console.log(val);
  
}