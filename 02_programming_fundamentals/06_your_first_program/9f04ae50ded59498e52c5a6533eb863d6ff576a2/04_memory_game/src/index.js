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
const tabtab = [];
for (let tableauDeSymbols in symbols){
  //for(let i = 0; i < tableauDeSymbols.length; i++){
tabtab.push(tableauDeSymbols);
    console.log(tabtab);
  //}
//tabtab.push(tabtab[symbols[tableauDeSymbols]]);

  //console.log(`${tableauDeSymbols} et ${symbols[tableauDeSymbols]}`);
  
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
