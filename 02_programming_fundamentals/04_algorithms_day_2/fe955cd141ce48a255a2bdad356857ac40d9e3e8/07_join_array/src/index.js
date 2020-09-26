const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const separateur = " <> ";

function joinArray(param1, param2) {
  // Code your function here.

  return param1.reduce(
    (accumulator, currentValue) =>
      accumulator + param2 + currentValue
  );
}
console.log(joinArray(array1, separateur));

// ⚠ Do not remove me ! It's for tests
module.exports = joinArray;
