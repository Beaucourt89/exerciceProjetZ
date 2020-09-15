const readline = require("readline");
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const clear = require("./clear");


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
}
for (const tableauDeSymbols in symbols){

  console.log(`${tableauDeSymbols} et ${symbols[tableauDeSymbols]}`);
}
for (const tableauDeSymbols2 in symbols){

  console.log(`${tableauDeSymbols2} `);
}


//fonction, qui renvoie le tableau.
const createBoard = () => {

};
//
const shuffle = () => {

};

//const tableauDeSymbols =[] ;
//affiche le contenu de l'objet


// for(let i = 0; i < ; i++){
//   tableauDeSymbols.push(tableauDeSymbols[i]);
// }
//  console.log(tableauDeSymbols);
