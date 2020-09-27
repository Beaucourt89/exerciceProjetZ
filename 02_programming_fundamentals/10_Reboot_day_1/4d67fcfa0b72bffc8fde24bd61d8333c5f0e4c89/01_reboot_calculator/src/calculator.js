//permet de gerer les , et chiffres decimal
const parseNumber = (number) => {
  const modifiedNumber = number.replace(",", ".");
  return parseFloat(modifiedNumber);
};

export default function calculator(reader) {
  //(1) Pose la premiere question pour le firstnumber
  reader.question("❶ Enter the first number \n ➡ ", (firstNb) => {
    //(2) Save la valeur saisie en utilisant une fonction qui remplace les "," par "."
    const firstNumber = parseNumber(firstNb);
    //(3) Si la valeur n'est pas un Number, log un message et relance la fonction
    if (isNaN(firstNumber)) {
      console.log("❌ Vous n'avez pas saisie un nombre ❌");
      calculator(reader);
      //(4) Si c'est un Number execute la suite
    } else {

      // Comme le (1), (2), (3) et (4).
      reader.question("❷ Enter the operator \n ➡ ", (ope) => {
        const operator = ope;
        if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
          console.log("❌ Vous n'avez pas saisie le bonne operateur ❌");
          calculator(reader);
        } else {

          reader.question("❸ Enter the second number \n ➡ ", (secondNb) => {
            const secondNumber = parseNumber(secondNb);

            if (isNaN(secondNumber)) {
              console.log("❌ Vous n'avez pas saisie un nombre ❌");
              calculator(reader);
            } else {

              //execute les differentes opperation en fonction de l'operateur choisie
              if (operator === "+") {
                const addition = firstNumber + secondNumber;
                console.log(` ${firstNumber} ${operator} ${secondNumber} = ${addition}`);
                reader.close();
              } else if (operator === "-") {
                const soustraction = firstNumber - secondNumber;
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${soustraction}`);
                reader.close();
              } else if (operator === "*") {
                const multiplication = firstNumber * secondNumber;
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${multiplication}`);
                reader.close();
              } else if (operator === "/") {
                const division = firstNumber / secondNumber;
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${division}`);
                reader.close();
              }
              console.log(" 🖐 Bye Bye 🖐 ");
              reader.close();
            }
          });
        }
      });
    }
  });
}
