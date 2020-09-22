import readline from "readline";
import affichagePageAccueil from "./affichagePageAccueil.js";


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

console.log(affichagePageAccueil.menu(), );
console.log(affichagePageAccueil.choixMenu(reader));
