// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

let rows = 4;

for (let i = 0; i < rows; i++) { 
  let stars = ""; 
  for (let j = 1; j < rows-i; j++) { 
    stars = stars + " "; 
  } 
  for (let k = 1; k <= (2*i+1); k++) { 
    stars = stars + "*"; 
  } 
  console.log(stars); 
} 