let numberOfLiters = 0;

export function putLitersOfCoffee(quantity) {
  numberOfLiters = quantity;
}

export function consumeLitersOfCoffee(quantity) {
  if (numberOfLiters - quantity >= 0) {
    numberOfLiters -= quantity;

    return true;
  }

  return false;
}