const readline = require("readline");
const clear = require("./clear");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomInt = (max) => Math.floor(Math.random() * max);

const symbols = {
  tree: "🌳",
  ghost: "👻",
  tooth: "🦷",
  fish: "🐟",
  imp: "😈",
  robot: "🤖",
  invader: "👾",
  apple: "🍏",
  car: "🚗",
  cold: "🥶",
  peach: "🍑",
  boom: "💥",
  bomb: "💣",
  boot: "👢",
  pumkin: "🎃",
  fox: "🦊",
  rabbit: "🐇",
  kiss: "💋",
  salad: "🥗",
  clown: "🤡",
};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const createBoard = (symbolCount) => {
  let items = Object.entries(symbols).map(([name, symbol]) => {
    return {
      name,
      symbol,
      discovered: false,
    };
  });

  const board = [];
  for (let i = 0; i < symbolCount / 2; i++) {
    const item = items[randomInt(items.length)];
    board.push(Object.assign({}, item));
    board.push(Object.assign({}, item));
    items = items.filter((i) => i.name !== item.name);
  }
  return board;
};

function display(board, visible = false) {
  console.log(board.map((item, i) => (item.discovered || visible ? `${i + 1}:${item.symbol}` : `${i + 1}:❔`)));
}

let attempts = 0;

function gameLoop(reader, board, lastChoice = null) {
  const win = board.every((i) => i.discovered === true);
  clear();
  display(board);
  if (win) {
    console.log(`You won! with ${attempts} attempts!`);
    reader.close();
  } else {
    reader.question("choose a card\n> ", (index) => {
      attempts += 1;
      const newChoice = board[index - 1];
      if (lastChoice && lastChoice.name === newChoice.name) {
        newChoice.discovered = true;
        gameLoop(reader, board);
      } else if (lastChoice) {
        newChoice.discovered = true;
        clear();
        display(board);
        reader.question("Wrong!\nPress [enter] to continue!\n", () => {
          newChoice.discovered = false;
          lastChoice.discovered = false;
          gameLoop(reader, board);
        });
      } else {
        newChoice.discovered = true;
        gameLoop(reader, board, newChoice);
      }
    });
  }
}

function memoryGame(reader) {
  console.log("Welcome in the Memory Game!");
  const possibleMaxItems = Object.keys(symbols).length * 2;
  reader.question(`Choose an even board size between 4 and ${possibleMaxItems}\n`, (boardSize) => {
    const board = shuffle(createBoard(boardSize));
    display(board, true);
    reader.question("Press [Enter] to start!\n> ", () => {
      gameLoop(reader, board);
    });
  });
}

memoryGame(reader);