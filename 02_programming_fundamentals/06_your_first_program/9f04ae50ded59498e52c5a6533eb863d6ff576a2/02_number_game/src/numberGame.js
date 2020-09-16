//1er function
function numberGame(reader, min = 1, max = 100) {
  const numberMister =Math.round(Math.random() * (max - min) + min);
  console.log(numberMister);

  //2em Function
  const StartGame = (questionText) => {
    reader.question(questionText, (number) => {
      if (isNaN(number)) {
        StartGame (`${number}, is not a Number!! \n>`);
      } else if (number < min || number > max) {
        StartGame (`Number is between ${min} and ${max} \n> `);
      } else if (number < numberMister) {
        StartGame ("Too low \n> ");
      } else if (number > numberMister) {
        StartGame ("Too high \n> ");
      } else {
        StartGame ("You won!");
        console.log("You won!");
        reader.close();
      }
    });
  };
  StartGame("Trouvez le nombre mister !\n>");
}

module.exports = numberGame;
