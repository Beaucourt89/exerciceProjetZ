function filter(array, fn) {
  // Your code here
  const tab = [];
  for(let i = 0; i < array.length; i++){
    if(fn(array[i])){
      tab.push(array[i]);
    }
  }
  return tab;
}
function pickEvenNumbers(number){
  if(number % 2 === 0){
    return true;
  }
}
function pickOddNumbers(number){
  if(number % 2 !== 0){
    return true;
  }
}
console.log(filter([1,2,3,4,5], pickEvenNumbers));
console.log(filter([1,2,3,4,5], pickOddNumbers));

// do not remove this line, it is for tests
module.exports = filter;
