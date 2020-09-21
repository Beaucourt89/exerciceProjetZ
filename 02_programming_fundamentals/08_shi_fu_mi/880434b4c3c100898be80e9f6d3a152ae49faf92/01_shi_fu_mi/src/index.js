const readline = require("readline");
const clear = () => console.log("\x1B[2J\x1B[0f");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const symbols = {
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

//fonction qui genere un chiffre random pour ia
const iaRandoom = () => {
  return Math.floor(Math.random() * 3);
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

//fonction qui compare les elements
const comparer = (saveChooseInIndex, aiSaveChooseInIndex) => {
  console.log(saveChooseInIndex, aiSaveChooseInIndex);
  if (saveChooseInIndex === aiSaveChooseInIndex) {
    console.log("Egalité. L IA a choisi " + aiSaveChooseInIndex);
  } else if (
    (saveChooseInIndex === "rock" && aiSaveChooseInIndex === "scissors") ||
    (saveChooseInIndex === "paper" && aiSaveChooseInIndex === "rock") ||
    (saveChooseInIndex === "scissors" && aiSaveChooseInIndex === "paper")
  ) {
    console.log("J ai Gagné. L IA a choisi " + aiSaveChooseInIndex);
  } else if (
    (saveChooseInIndex === "paper" && aiSaveChooseInIndex === "scissors") ||
    (saveChooseInIndex === "rock" && aiSaveChooseInIndex === "paper") ||
    (saveChooseInIndex === "scissors" && aiSaveChooseInIndex === "rock")
  ) {
    console.log("j'ai perdu. L IA a choisi " + aiSaveChooseInIndex);
  }
};

//fonction rejouer
const rejouerOUpas = () => {
  reader.question("Tu veux rejouer ??? ( Y / n )", (reponse) => {
    if (reponse.toLowerCase() === "y") {
      menu();
    } else if (reponse.toLowerCase() === "n") {
      reader.close();
    } else {
      console.log("Je n'ai pas compris, VOULEZ REJOUER ?????");

      rejouerOUpas();
    }
  });
};

//fonction pour message de bienvenue
const afficheMessage = () => {
  //message de bienvenu et choix
  console.log("Welcome to ShiFuMi");
  Object.keys(symbols).forEach((element, index) => {
    console.log(`${index + 1} - ${element}`);
  });
};

//Fonction joueur2
const joueurTwo = () => {
  reader.question("Player 2 please choose a move\n> ", (playerTwo) => {
    const aiIndex = parseInt(playerTwo - 1);
    const aiSaveChooseInIndex = Object.keys(symbols)[aiIndex];
    const aiImage = symbols[aiSaveChooseInIndex].map(reverseLine);

    return { aiIndex, aiSaveChooseInIndex, aiImage};
  });
};


//IA
const ia = () => {
  const aiIndex = parseInt(iaRandoom());
  const aiSaveChooseInIndex = Object.keys(symbols)[aiIndex];
  const aiImage = symbols[aiSaveChooseInIndex].map(reverseLine);

  return { aiIndex, aiSaveChooseInIndex, aiImage};
};

//menu
const menu = () => {
  clear();
  console.log("Welcome to ShiFuMi");
  reader.question("tu veux jouer contre IA ou PLAYER? \n ", (choixAdversaire) => {
    if (parseInt(choixAdversaire) === 1) {
      startGame(joueurTwo);
    } else if (parseInt(choixAdversaire) === 2) {
      startGame(ia);
    } else {
      console.log("Je n'est pas trouver ton adversaire ");
      clear();
      menu();
    }
  });
};

//fonction startGame
const startGame = (choixAdv) => {
  clear();
  afficheMessage();

  //JOUEUR 1
  reader.question("Player 1 please choose a move\n> ", (playerOne) => {
    //recup la saisie et retire 1
    let index = parseInt(playerOne - 1);
    // save la saisie dans l'index
    const saveChooseInIndex = Object.keys(symbols)[index];
    //fait correspondre l'index a l'image
    const image1 = symbols[saveChooseInIndex];

    if (index === 0 || index === 1 || index === 2) {
      const resultChoixAdv = choixAdv();

      console.log(resultChoixAdv);

      console.log("\n> PlayerOne : \n " + image1.join(" \n "));
      console.log("\n> PlayerTwo : \n " + resultChoixAdv.aiImage.join(" \n "));

      comparer(saveChooseInIndex, resultChoixAdv.aiSaveChooseInIndex);
      rejouerOUpas();
    } else {
      console.log("Saisir un valeur ");

      menu();
    }
  });
};

// startGame();
//console.log("114", joueurTwo());

menu();