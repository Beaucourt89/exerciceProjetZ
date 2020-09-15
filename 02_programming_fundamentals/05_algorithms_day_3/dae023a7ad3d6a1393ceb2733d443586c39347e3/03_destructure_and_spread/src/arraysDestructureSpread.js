function arrayCrusher(firstArray, secondArray) {
  return [...firstArray, ...secondArray];
}

function recursiveBouncer(list) {
  if(list.length === 0){
    return;
  }
  const [firstElement, ...rest] = list;
  console.log(firstElement);
  recursiveBouncer(rest);
}

module.exports = {
  arrayCrusher,
  recursiveBouncer,
};
