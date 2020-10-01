const fs = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayDirectory(path) {
  fs.readdir(path, (_error, files) => {
    let i = 0;

    const formatedFiles = files.reduce((acc, value) => {
      i += 1;
      let newValue = acc + i + ". " + value;
      newValue += (fs.statSync(path + "/" + value).isDirectory()) ? "/\n" : "\n";
      return newValue;
    }, "0. ../\n");

    console.log(formatedFiles);

    reader.question("Choose a number > ", (input) => {
      if (input === "0") {
        displayDirectory("../");
      } else {
        const choosen = path + "/" + files[parseInt(input)-1];
        if (fs.statSync(choosen).isDirectory()) {
          displayDirectory(choosen);
        } else {
          displayFile(choosen, path);
        }
      }
    });
  });
}

function displayFile(choosen, path) {
  fs.readFile(choosen, "utf8", (error, data) => {
    console.log(data);
    displayDirectory(path);
  });
}

module.exports = {
  displayDirectory
}; 