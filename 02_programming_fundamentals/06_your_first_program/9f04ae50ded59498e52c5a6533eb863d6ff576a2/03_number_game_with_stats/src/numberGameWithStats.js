function numberGameWithStats(reader, min = 1, max = 100) {
  const numberMister = Math.round(Math.random() * (max - min) + min);
  console.log(numberMister);
  let nouvelleQuestion = "Enter your number :  \n>";
  let nombreDeCoup = 1;
  let compteurBoom = 5;
 
  const StartGame = () => {
    reader.question(nouvelleQuestion, (number) => {
      if (compteurBoom !== 1) {
        if (isNaN(number)) {
          nouvelleQuestion = `${number}, is not a Number!! \n>`;
          nombreDeCoup++;
          compteurBoom--;
          StartGame();
        } else if (number < min || number > max) {
          nouvelleQuestion = `Number is between ${min} and ${max} \n> `;
          nombreDeCoup++;
          compteurBoom--;
          StartGame();
        } else if (number < numberMister) {
          nouvelleQuestion = "Too low \n> ";
          nombreDeCoup++;
          compteurBoom--;
          StartGame();
        } else if (number > numberMister) {
          nouvelleQuestion = "Too high \n> ";
          nombreDeCoup++;
          compteurBoom--;
          StartGame();
        } else {
          console.log("You won!");
          console.log(`Bravo tu as trouvé le nombre en  ${nombreDeCoup} coups \n> `);
          reader.close();
        }
      } else {
        console.log("BOOOOOOOOOOOOOOOOOOOM");
        reader.close();
      }

      console.log(compteurBoom);
    });
  };
  StartGame();
}
module.exports = numberGameWithStats;