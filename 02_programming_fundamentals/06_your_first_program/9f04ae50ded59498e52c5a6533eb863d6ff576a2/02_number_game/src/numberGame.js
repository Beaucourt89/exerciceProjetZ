//1er function
function numberGame(reader, min = 1, max = 100) {
  const numberMister =Math.round(Math.random() * (max - min) + min);
  console.log(numberMister);

  let nouvelleQuestion = "Enter your number :  \n>";

  //2em Function
  const StartGame = () => {
    reader.question(nouvelleQuestion, (number) => {
      if (isNaN(number)) {
        nouvelleQuestion = `${number}, is not a Number!! \n>`;
        StartGame();
      } else if (number < min || number > max) {
        nouvelleQuestion = `Number is between ${min} and ${max} \n> `;;
        StartGame();
      } else if (number < numberMister) {
        nouvelleQuestion = "Too low \n> ";
        StartGame();
      } else if (number > numberMister) {
        nouvelleQuestion = "Too high \n> ";
        StartGame();
      } else {
        nouvelleQuestion = "You won!";
        console.log("You won!");
        reader.close();
      }
    });
  };
  StartGame();
}

module.exports = numberGame;
