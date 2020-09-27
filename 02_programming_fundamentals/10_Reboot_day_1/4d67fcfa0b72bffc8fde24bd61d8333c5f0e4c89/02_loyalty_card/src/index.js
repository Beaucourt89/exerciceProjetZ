import readline from "readline";
import loyaltyCardManager from "./reTestIndex/loyaltyCardManager/index.js"

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


loyaltyCardManager(reader);
