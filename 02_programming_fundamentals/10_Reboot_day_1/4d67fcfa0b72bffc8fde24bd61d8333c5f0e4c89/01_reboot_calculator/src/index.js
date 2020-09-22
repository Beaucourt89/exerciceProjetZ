import readline from "readline";
import calculator from "./calculator.js";

//fonction qui permet de clear la console
//const clear = () => console.log("\x1B[2J\x1B[0f");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function messageWrongOperation() {
//   console.log(console.log("Choose an operation: [ + - * / ]"));
// }

// function startCalculator() {
//   clear();
//   console.log("Ready to compute operations! \n **************************** \n");
//   reader.question("Enter the first number\n> ", (firstNumber) => {
//     reader.question("Choose an operation: [ + - * / ]\n> ", (operation) => {
//       reader.question("Enter the second number\n> ", (secondtNumber) => {
//         firstNumber = Number(firstNumber);
//         secondtNumber = Number(secondtNumber);
//         if (operation === "addition" || operation === "+") {
//           console.log(calculator.addition(firstNumber, secondtNumber));
//         } else if (operation === "subtraction" || operation === "-") {
//           console.log(calculator.subtraction(firstNumber, secondtNumber));
//         } else if (operation === "multiplication" || operation === "*") {
//           console.log(calculator.multiplication(firstNumber, secondtNumber));
//         } else if (operation === "division" || operation === "/") {
//           console.log(calculator.division(firstNumber, secondtNumber));
//         } else {
//           messageWrongOperation();
//         }

//         reader.close();

//       });
//     });
//   });
// }

//startCalculator();
calculator(reader);
