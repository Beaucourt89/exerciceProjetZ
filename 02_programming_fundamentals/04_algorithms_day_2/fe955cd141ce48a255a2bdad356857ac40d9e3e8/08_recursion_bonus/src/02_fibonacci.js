function fibo(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibo(n - 2, 1, 0);
}

function recursiveFibo(n, n_1, n_2) {
  if (n === 0) {
    return n_1 + n_2;
  } else {
    return recursiveFibo(n - 1, n_1 + n_2, n_1);
  }
}
console.log(fibo(5));
// do not remove this line, it is for tests
module.exports = fibo;
