function fizzBuzz(list) {
  // Code the function here.
  const newDigits=[];
  let sFizzBuzz="";
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    sFizzBuzz="";
    if (element % 3 === 0 )
    {
      sFizzBuzz = "Fizz";
    }
    if (element % 5 === 0) {
      sFizzBuzz = sFizzBuzz + "Buzz";
    }
    if (sFizzBuzz === "" ) {
      sFizzBuzz = element;
    }
    newDigits.push(sFizzBuzz);
  }
  return newDigits;
}
console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,150]));