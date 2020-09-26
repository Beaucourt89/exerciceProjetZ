function fact(n) {
  let accumulator = 1;
  if (n < 0) {
    return null;
  }

  if (n === 0) {
    return 1;
  } else {
    return recursiveFact(n, accumulator); // Launches the recursive function, only catching its result
  }
}

function recursiveFact(n, accumulator) {
  // Does the recursive calls, including the accumulator as an argument.
  if (n === 1) {
    return accumulator;
  } else {
    return recursiveFact(n - 1, accumulator * n);
  }
}
console.log(fact(4));

// do not remove this line, it is for tests
module.exports = fact;
