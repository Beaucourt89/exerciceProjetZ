const getNumberToFind = (min, max) => Math.round(Math.random() * (max - min) + min);

function analyzeResponse(pnumberToFind, pminNumber, pmaxNumber, presponse) {
  let result = "error";
  if (isNaN(presponse)) {
    result = "This was not a number\n";
  } else {
    const currentNumber = parseInt(presponse, 10);
    if (currentNumber < pminNumber || currentNumber > pmaxNumber) {
      result = `The number is between ${pminNumber} and ${pmaxNumber}\n`;
    } else if (currentNumber === pnumberToFind) {
      result = "You won!";
    } else if (currentNumber < pnumberToFind) {
      result = "Too low\n";
    } else if (currentNumber > pnumberToFind) {
      result = "Too high\n";
    }
  }
  return result;
}

let currentQuestion = "Enter a number\n> ";

function startGame(reader, number, min, max, attempts = 1) {
  reader.question(currentQuestion, (response) => {
    const currentAnalyze = analyzeResponse(number, min, max, response);
    currentQuestion = currentAnalyze;
    if (currentAnalyze === "You won!") {
      console.log(
        attempts === 1
          ? "Wooooow! Won with 1 attempt? Did you cheat?"
          : `${currentAnalyze}\nYou made ${attempts} tries to win!`,
      );
      reader.close();
    } else {
      startGame(reader, number, min, max, attempts + 1);
    }
  });
}

function numberGameWithStats(reader, min = 1, max = 100) {
  console.log("Welcome!");
  console.log(`You have to find the right number, between ${min} and ${max}!`);
  console.log("Good luck!!");
  const number = getNumberToFind(min, max);
  console.log(number);
  startGame(reader, number, min, max);
}

module.exports = numberGameWithStats;