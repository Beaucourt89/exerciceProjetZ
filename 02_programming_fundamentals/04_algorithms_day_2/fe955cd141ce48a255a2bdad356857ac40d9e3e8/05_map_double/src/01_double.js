function double(nb) {
  const tabtab = [];

  for (let i = 0; i < nb.length; i++) {
    tabtab.push(nb[i] * 2);
  }
  return tabtab;
}

console.log(double([2,4,8, 50, 64, 123]));
// Do not remove last lines, it is for tests
module.exports = double;