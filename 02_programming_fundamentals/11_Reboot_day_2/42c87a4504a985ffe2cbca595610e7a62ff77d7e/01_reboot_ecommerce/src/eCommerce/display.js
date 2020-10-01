const clear = () => console.log("\x1B[2J\x1B[0f");

function ask(question, callback) {
  this.reader.question(`${question}\n> `, callback);
}

function printTitle(title) {
  console.log("**************************************************");
  console.log(title.toUpperCase());
  console.log("**************************************************");
}

function showActions(list) {
  console.log(list.map((element, index) => `${index + 1} - ${element}`).join("\n"));
}

function showProducts(products) {
  console.log(
    products
      .map((product, index) => `${index + 1} - ${product.label}: ${product.price}€ (quantity: ${product.quantity})`)
      .join("\n"),
  );
}

function menu(menu) {
  printTitle("menu");
  showActions(menu);
}

function close() {
  clear();
  printTitle("Thank you!\nBye!");
  this.reader.close();
}

module.exports = function (reader) {
  return {
    ask,
    clear,
    close,
    menu,
    printTitle,
    reader,
    showActions,
    showProducts,
  };
};