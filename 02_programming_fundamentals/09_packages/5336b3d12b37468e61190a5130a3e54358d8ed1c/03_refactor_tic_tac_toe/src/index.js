const readline = require("readline");
const ticTacToe = require("./ticTacToe");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

ticTacToe.start(reader);