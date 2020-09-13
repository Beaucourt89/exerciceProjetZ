// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```

let ligneHorizontal = 10;
const stars = "**********";

for(let i = 1; i <= ligneHorizontal; i++){
  let nbDeLigneRemplit = ligneHorizontal;
  nbDeLigneRemplit = stars;
  console.log(nbDeLigneRemplit);
}