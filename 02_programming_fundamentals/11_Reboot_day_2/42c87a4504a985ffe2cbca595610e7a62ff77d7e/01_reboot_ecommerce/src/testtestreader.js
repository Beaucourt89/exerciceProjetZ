import * as readline from "readline";
import taskManager from "./testtest.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

taskManager(reader);