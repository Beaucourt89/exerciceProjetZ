import * as container from "./container.js";
import * as drinks from "./drinks.js";

export function fillWithLitersOfCoffee(liter) {
  container.putLitersOfCoffee(liter);
}

export function expresso() {
  return drinks.expresso(container);
}

export function longCoffee() {
  return drinks.longCoffee(container);
}