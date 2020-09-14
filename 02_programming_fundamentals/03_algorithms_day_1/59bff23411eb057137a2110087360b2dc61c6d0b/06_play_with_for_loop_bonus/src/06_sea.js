// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```

let wave = "";
for(let i = 0; i < 30; i++){
  wave += "~";
}
for(let i = 0; i < 9; i++){
  if(i === 1){
    console.log(wave.substring(1, 25) + "X" + wave.substring(25, 30));
  } else if(i === 8){
    console.log(wave.substring(1, 7) + "X" + wave.substring(7, 30));
  } else if(i === 3){
    console.log(wave.substring(1,6) + "0" + wave.substring(6,30));
  } else if(i === 6){
    console.log(wave.substring(1,18) + "0" + wave.substring(18,30));
  } else {
    console.log(wave);
  }
}