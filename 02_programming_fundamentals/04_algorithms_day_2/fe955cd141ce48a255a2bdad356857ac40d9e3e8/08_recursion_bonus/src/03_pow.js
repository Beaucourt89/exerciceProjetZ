function pow(number, power) {
  if (power === 0) {
    return 1;
  }
  return recursivePow(number, number, power);
}

function recursivePow(number, accumulator, repetition) {
  if (repetition === 1) {
    return accumulator;
  } else {
    return recursivePow(number, accumulator * number, repetition - 1);
  }
}

// do not remove this line, it is for tests
module.exports = pow;