const { renderBoard } = require("./display");
const { isNotNull, flattenArray } = require("./utilities");
const { state, updateState } = require("./gameState");

const WINNING_COORDINATES = [
  [
    { letter: "a", digit: "0" },
    { letter: "a", digit: "1" },
    { letter: "a", digit: "2" },
  ],
  [
    { letter: "b", digit: "0" },
    { letter: "b", digit: "1" },
    { letter: "b", digit: "2" },
  ],
  [
    { letter: "c", digit: "0" },
    { letter: "c", digit: "1" },
    { letter: "c", digit: "2" },
  ],
  [
    { letter: "a", digit: "0" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "2" },
  ],
  [
    { letter: "a", digit: "2" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "0" },
  ],
  [
    { letter: "a", digit: "0" },
    { letter: "b", digit: "0" },
    { letter: "c", digit: "0" },
  ],
  [
    { letter: "a", digit: "1" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "1" },
  ],
  [
    { letter: "a", digit: "2" },
    { letter: "b", digit: "2" },
    { letter: "c", digit: "2" },
  ],
];

let currentPlayer;

function handleInput(input, reader) {
  const coordinate = getCoordinate(input);
  if (coordinate) {
    updateState(coordinate, currentPlayer);
    if (hasWinner()) {
      console.log(renderBoard(state));
      console.log(`Congratulations ${currentPlayer}, you won! ＼(＾O＾)／`);
      reader.close();
    } else if (gameIsFinished(state)) {
      console.log(renderBoard(renderBoard));
      console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
      reader.close();
    } else {
      nextPlayer();
      playTurn(reader);
    }
  } else {
    console.log("This is not a valid move");
    playTurn(reader);
  }
}

function getCoordinate(input) {
  const letter = input[0];
  const digit = input[1] - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function playTurn(reader) {
  console.log(renderBoard(state));
  reader.question(`${currentPlayer}: What is your move? e.g: a1\n`, (input) => {
    handleInput(input, reader);
  });
}

function start(reader) {
  currentPlayer = ["X", "O"][Math.round(Math.random())];

  playTurn(reader);
}

function gameIsFinished(state) {
  const allValues = flattenArray(Object.values(state));

  return allValues.every(isNotNull);
}

function hasWinner() {
  const isWinningLine = (line) => {
    const pattern = line.map((coordinate) => state[coordinate.letter][coordinate.digit]).join("");

    return pattern === "XXX" || pattern === "OOO";
  };

  return WINNING_COORDINATES.some(isWinningLine);
}

module.exports = { start };