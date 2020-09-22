import { longCoffee, expresso } from "./drinks.js";
import { putLitersOfCoffee, consumeLitersOfCoffee, fillWithLitersOfCoffee } from "./container.js";

const coffeeMachine = {
  putLitersOfCoffee,
  expresso,
  fillWithLitersOfCoffee,
  consumeLitersOfCoffee,
  longCoffee,
  
};

export { coffeeMachine };
