import loyaltyCardManager from "./loyaltyCardManager/index.js";

import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

loyaltyCardManager(reader);