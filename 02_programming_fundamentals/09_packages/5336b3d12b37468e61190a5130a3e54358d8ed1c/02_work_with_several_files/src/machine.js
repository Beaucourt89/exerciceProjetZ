import { longCoffee, expresso } from "./drinks.js";
import { putLitersOfCoffee, consumeLitersOfCoffee } from "./container.js";

const coffeeMachine = {
  litersOfCoffee: 0,
  expresso,
  consumeLitersOfCoffee,
  longCoffee,
  putLitersOfCoffee,
};

export { coffeeMachine };
