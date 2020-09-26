function double(nb) {
  return nb * 2;
}

function map(Array, fonctionEntier) {
  const tabtab = [];

  for (let index = 0; index < Array.length; index++) {
    tabtab.push(fonctionEntier(Array[index]));
  }
  return tabtab;
}

console.log(double(5));
console.log(map([2, 4, 8, 50, 64, 123], double));
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = { double: double, map: map };
