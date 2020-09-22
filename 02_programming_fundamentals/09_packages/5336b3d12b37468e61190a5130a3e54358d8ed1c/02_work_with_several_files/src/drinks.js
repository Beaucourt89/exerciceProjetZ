import { consumeLitersOfCoffee} from "./container.js";


function longCoffee (liter) {
  return consumeLitersOfCoffee(0.15);
}; 

function expresso (liter) {
  return consumeLitersOfCoffee(0.08);
};
  ​
export { longCoffee, expresso };