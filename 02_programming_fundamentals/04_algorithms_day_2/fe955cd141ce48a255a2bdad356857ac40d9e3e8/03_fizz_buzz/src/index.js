function fizzBuzz(list) {
  // Code the function here.
  const newtab = [];

  for(let i= 0 ; i < list.length; i++){
    
    if(list[i] % 3 === 0 && list[i] % 5 === 0){
      newtab.push("FizzBuzz");
      
    } else if(list[i] % 5 === 0){
      newtab.push("Buzz");
      
    } else if(list[i] % 3 === 0){
      newtab.push("Fizz");
      
    }else {
      newtab.push(list[i]);
    }
  }
  return newtab;
}
console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,150]));
// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;