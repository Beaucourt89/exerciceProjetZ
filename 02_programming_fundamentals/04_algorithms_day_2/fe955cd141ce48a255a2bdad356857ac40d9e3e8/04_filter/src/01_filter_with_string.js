function filter(array, str) {
  // Your code here
  const tab = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0 && str === "even"){
      tab.push(array[i]);
    } else if(str === "odd" && array[i] % 2 !== 0){
      tab.push(array[i]);
    } else if(str !== "even" && str !== "odd"){
      return array;
    }
  }
  return tab;
}
const tableau = [1,2,3,4,5];
console.log(filter(tableau,"even"));
console.log(filter(tableau,"odd"));
console.log(filter(tableau,"hfbizhefgizhfgi"));

module.exports = filter;
