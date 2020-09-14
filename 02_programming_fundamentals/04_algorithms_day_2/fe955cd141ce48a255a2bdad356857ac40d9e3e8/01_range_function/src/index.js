function range(nb1,nb2) {
  // Code the function here.
  const ascArray = [];
  if(nb1 < nb2){
    for(let i = nb1; i <= nb2; i++){
      ascArray.push(i);  
    } 
  } else { 
    for(let i = nb1; i >= nb2; i--){
      ascArray.push(i);
    }
  }
  return ascArray;
}


range(26,12);

// Do not remove last lines, it is for tests
module.exports = range;



