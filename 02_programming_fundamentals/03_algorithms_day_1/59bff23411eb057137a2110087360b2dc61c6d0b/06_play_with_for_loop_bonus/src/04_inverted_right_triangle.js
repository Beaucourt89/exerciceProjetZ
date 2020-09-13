// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
let rows = 5;
let stars = "";

let txt = "";
let txt2 = " ";
for(let i = 0; i < 5; i++){
  txt += "*";
}
console.log(txt);
for(let i = 0; i < 4; i++){
  console.log(txt = txt2 + txt.substring(0,txt.length-1));
}