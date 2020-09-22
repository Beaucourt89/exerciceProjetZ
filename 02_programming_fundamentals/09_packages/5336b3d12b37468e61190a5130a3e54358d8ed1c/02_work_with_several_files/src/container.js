export { consumeLitersOfCoffee, putLitersOfCoffee, fillWithLitersOfCoffee };
import{longCoffee, expresso} from "./drinks.js";

function putLitersOfCoffee() {
  return (litersOfCoffee = 0);
}

function fillWithLitersOfCoffee(liters) {
  litersOfCoffee += liters;
}

function consumeLitersOfCoffee(quantityInCentiliters) {
  if (litersOfCoffee - quantityInCentiliters >= 0) {
    litersOfCoffee -= quantityInCentiliters;
    return true;
  } else {
    return false;
  }
}
