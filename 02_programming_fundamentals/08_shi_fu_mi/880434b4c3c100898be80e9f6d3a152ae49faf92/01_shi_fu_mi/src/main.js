const { read } = require("fs");
//recupere la saisie de l'utilisateur
const readline = require("readline");

//fonction qui permet de clear la console
const clear = () => console.log("\x1B[2J\x1B[0f");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Objet moves
const moves = {
  rock: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],

  paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],

  scissors: [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};

//fonction pour reverse les images
const reverseLine = (line) => {
  const changeLine = line
    .split("")
    .map((char) => {
      if (char === ")") {
        return "(";
      } else if (char === "(") {
        return ")";
      }
      return char;
    })
    .join("");
  return changeLine.split("").reverse().join("");
};

//fonction qui compare et annonce l'Égalité ou le gagnant
function compare(firstPlayerMove, secondPlayerMove) {
  if (!Object.keys(moves).includes(firstPlayerMove)) {
    return "unknow symbol";
  }
  if (firstPlayerMove === secondPlayerMove) {
    return "it's draw";
  } else if (firstPlayerMove === "rock") {
    if (secondPlayerMove === "scissors") {
      return "Player One win";
    } else {
      return "Second player win";
    }
  } else if (firstPlayerMove === "paper") {
    if (secondPlayerMove === "rock") {
      return "Player One win";
    } else {
      return "Second player win";
    }
  } else if (firstPlayerMove === "scissors") {
    if (secondPlayerMove === "paper") {
      return "Player One win";
    } else {
      return "Second player win";
    }
  }
}

//une fonction pour juste eviter de taper le \n> a la fin de la question.
const ask = (question, callback) => reader.question(`${question}\n>`, callback);
//fonction pour recuperer les infos de JOUEUR OU IA
const getMove = (index) => Object.keys(moves)[index];

//function qui pose la question pour rejouer
function replay() {
  ask("Replay? (Y / n)", (choice) => {
    if (choice.toLowerCase() === "y" || choice === "") {
      shiFuMi();
    } else {
      console.log("Thanks for game!");
      reader.close();
    }
  });
}

//Fonction pour l'affichage des image rock, scissor, paper
function displayResult(firstPlayerMove, secondPlayerMove) {
  const result = compare(firstPlayerMove, secondPlayerMove);
  if (!(result === "unknow symbol")) {
    //AFFICHAGE
    //affiche l'image dans la consol
    console.log("***********************************************");
    console.log("\n> Player One : \n " + moves[firstPlayerMove].join(" \n ") + "\n");
    //affiche l'image de l'IA dans la consol
    console.log("***********************************************");
    console.log("\n> Player Two : \n " + moves[secondPlayerMove].map(reverseLine).join(" \n ") + "\n");
  }
  console.log("RESULTS: ", result);
}

function presentMoves() {
  //message de bienvenue

  //La méthode Object.keys() renvoie un tableau, le forEach recup l'index
  Object.keys(moves).forEach((moveName, index) => {
    console.log(`${index + 1} - ${moveName}`);
  });
}

function playVsDumbAi() {
  clear();
  console.log("Welcome to ShiFuMi");
  presentMoves();

  //JOUEUR 1
  // recupere et affiche le symbol qui correspond a la saise de L’utilisateur
  ask("\n Select a move", (userInput) => {
    const move = getMove(userInput - 1);

    //JOUEUR IA
    const aiMove = getMove(Math.floor(Math.random() * 3));

    displayResult(move, aiMove);

    replay();
  });
}

function twoPlayers() {
  presentMoves();
  ask("\n First Player choose a move", (firstPlayerInput) => {
    ask("\n Second Player choose a move", (secondPlayerInput) => {
      const firstPlayerMove = getMove(firstPlayerInput - 1);
      const secondPlayerMove = getMove(secondPlayerInput - 1);
      displayResult(firstPlayerMove, secondPlayerMove);
      replay();
    });
  });
}

//menu pour choisir son Adversaire
function shiFuMi() {
  clear();
  ["vs dumb AI", "2 players"].forEach((option, i) => console.log(`${i + 1} - ${option}`));
  ask("Choose a mode", (choice) => {
    switch (choice) {
      case "1":
        playVsDumbAi();
        break;
      case "2":
        twoPlayers();
        break;
    }
  });
}

//playVsDumbAi();
shiFuMi();
