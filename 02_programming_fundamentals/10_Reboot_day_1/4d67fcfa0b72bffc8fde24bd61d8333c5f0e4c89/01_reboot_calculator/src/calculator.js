// const addition = (nb1, nb2) => nb1 + nb2;
// const subtraction = (nb1, nb2) => nb1 - nb2;
// const multiplication = (nb1, nb2) => nb1 * nb2;
// const division = (nb1, nb2) => nb1 / nb2;

//export default {addition, subtraction, multiplication, division};

let R;
const ask = (question, callback) => R.question(`${question}\n>`, callback);

const parseNumber = (number) => {
  const modifiedNumber = number.replace(",", ".");
  parseFloat(modifiedNumber);
};

export default function calculator(reader) {
  R = reader;
  console.log("Welcome to the calculator!");
  R.ask("Enter the first number\n> ", (firstInput) => {
    R.ask("Choose an operation: [ + - * / ]\n> ", (operation) => {
      R.ask("Enter the second number\n> ", (secondInput) => {
        console.log(firstNumber, operation, secondNumber);

        const firstNumber = parseNumber(firstInput);
        const secondNumber = parseNumber(secondInput);

        let result;
        switch (operation) {
          case "+":
            result = firstNumber + secondNumber;
            break;
          case "_":
            result = firstNumber - secondNumber;
            break;
          case "*":
            result = firstNumber - secondNumber;
            break;
          case "/":
            result = firstNumber / secondNumber;
            break;
          default:
            console.log("Choose an operation: [ + - * / ]");
            break;
        }
        if (result) {
          console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
          reader.close();
        } else {
          calculator(R);
        }


      });
    });
  });
}
