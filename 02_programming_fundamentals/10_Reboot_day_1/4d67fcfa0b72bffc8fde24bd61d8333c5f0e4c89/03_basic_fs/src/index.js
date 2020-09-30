const basicFs = require("./basicFs.js");
const fs = require("fs");

basicFs.touch("hello");

console.log(fs.existsSync("hello"));