export { consumeLitersOfCoffee, putLitersOfCoffee };
import { litersOfCoffee } from "./machine.js";

function putLitersOfCoffee(liters) {
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
