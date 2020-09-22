// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇

let finalArray = [];

for (let index = 0; index < numberOfLine; index++) {
  let line = [];
  for (let index_2 = numberOfLine; index_2 > 0 + index; index_2--) {
    line.push(index_2);
  }
  if (index < numberOfLine - 1) {
    line.push("\n");
  }
  finalArray.push(line.join(""));
}

console.log(finalArray.join(""));