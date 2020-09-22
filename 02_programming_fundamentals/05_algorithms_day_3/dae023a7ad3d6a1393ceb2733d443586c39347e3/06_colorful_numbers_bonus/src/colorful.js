function isColorful(number) {
  const stringifiedNumber = number.toString();
  const numbers = [];

  for (let chunkSize = 1; chunkSize <= stringifiedNumber.length; chunkSize++) {
    for (let start = 0; start <= stringifiedNumber.length - chunkSize; start++) {
      const stringifiedSequence = stringifiedNumber.substr(start, chunkSize);
      const product = stringifiedSequence.split("").map(toInt).reduce(multiplyNumbers);

      numbers.push(product);
    }
  }

  return numbers.every(isUnique);
}

function isUnique(value, index, array) {
  return array.indexOf(value) === index;
}

function multiplyNumbers(first, second) {
  return first * second;
}

function toInt(string) {
  return parseInt(string, 10);
}

// Do not remove last lines, it is for tests
module.exports = isColorful;