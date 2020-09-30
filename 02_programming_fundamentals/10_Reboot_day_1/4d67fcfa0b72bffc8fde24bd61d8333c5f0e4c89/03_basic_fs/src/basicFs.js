const fs = require("fs");
const path = require("path");

const pwd = () => path.resolve(".");

function deleteFile(filePath) {
  fs.unlink(filePath, (error) => {
    if (error) {
      console.warn(error);
    }
  });
}

function copyPaste(sourceFilename, targetFilename) {
  try {
    fs.readFile(sourceFilename, (error, data) => {
      if (error) {
        return console.warn(error);
      }
      fs.writeFile(targetFilename, data, (error) => {
        if (error) {
          console.warn(error);
        }
      });
    });
  } catch(e) {
    console.warn(e);
  }
  
}

function cutPaste(sourceFilename, targetFilename) {
  fs.readFile(sourceFilename, (error, data) => {
    if (error) {
      return console.warn(error);
    }
    fs.writeFile(targetFilename, data, (error) => {
      if (error) {
        console.warn(error);
      } else {
        fs.unlink(sourceFilename, (error) => {
          if (error) {
            console.warn(error);
          }
        });
      }
    });
  });
}

function touch(filename) {
  fs.open(filename, "w", (error) => {
    if (error) {
      return false;
    }
    return true;
  });
}

module.exports = {
  pwd,
  copyPaste,
  cutPaste,
  deleteFile,
  touch,
};