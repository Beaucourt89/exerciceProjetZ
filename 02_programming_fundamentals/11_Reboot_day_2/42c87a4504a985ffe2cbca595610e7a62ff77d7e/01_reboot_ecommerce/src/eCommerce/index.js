const initDisplay = require("./display");
const initShop = require("./shop");
const initCart = require("./cart");

let display, shop, cart;
let warning = null;

const mainMenu = () => {
  display.clear();

  if (warning) {
    console.log(`⚠️  ${warning} ⚠️`);
    warning = null;
  }

  display.menu(["Buy a product", "Show cart", "Checkout", "Quit"]);
  display.ask("Choose an action", (action) => {
    switch (action) {
      case "1":
        buyProduct();
        break;
      case "2":
        showCart();
        break;
      case "3":
        checkOut();
        break;
      case "4":
        canCustomerLeave();
        break;
      default:
        mainMenu();
        console.log("Cmd unknown");
        break;
    }
  });
};

const checkOut = () => {
  display.clear();

  if (warning) {
    console.log(`⚠️  ${warning} ⚠️`);
    warning = null;
  }

  display.printTitle("checkout");
  display.showProducts(cart.getArticles());
  const total = cart.computeTotal();
  display.ask(`You have to pay: ${total}`, (amount) => {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount === total) {
      display.clear();
      console.log("Thank you!");
      display.printTitle("Goodbye!");
      display.reader.close();
    } else if (parsedAmount >= total) {
      display.clear();
      console.log("Thank you!");
      console.log(`Here's the remaining: ${amount - total} €`);
      display.printTitle("Goodbye!");
      display.reader.close();
    } else if (!Number.isNaN(parsedAmount)) {
      warning = "Wrong amount 😁";
      checkOut();
    } else {
      warning = "This is not money 😉";
      checkOut();
    }
  });
};

const canCustomerLeave = () => {
  if (cart.computeTotal() === 0) {
    display.close();
  } else {
    warning = "Please checkout before leaving 💰👈";
    mainMenu();
  }
};

const buyProduct = () => {
  display.clear();
  display.printTitle("Shop");

  if (warning) {
    console.log(`⚠️  ${warning} ⚠️`);
    warning = null;
  }

  const articles = shop.getArticles();
  display.showProducts(articles);
  console.log(`${articles.length + 1} - back to menu`);
  console.log(`${articles.length + 2} - quit`);
  display.ask("Choose a product", (index) => {
    if (index == articles.length + 1) {
      mainMenu();
    }
    if (index == articles.length + 2) {
      canCustomerLeave();
    }
    display.ask("How much?", (quantity) => {
      const article = articles[index - 1];
      if (article && article.quantity >= quantity) {
        cart.addArticle({
          label: article.label,
          price: article.price,
          quantity: quantity,
        });
        article.quantity -= quantity;
        mainMenu();
      } else if (article && article.quantity < quantity) {
        warning = `There's not enough ${article.label}`;
        buyProduct();
      } else {
        warning = "Unknown CMD";
        buyProduct();
      }
    });
  });
};

const showCart = () => {
  display.clear();
  display.printTitle("cart");
  const basket = cart.getArticles();
  display.showProducts(basket);
  display.printTitle(`total: ${cart.computeTotal()} €`);
  display.showActions(["Back to menu", "Quit"]);
  display.ask("Choose an action", (choice) => {
    switch (choice) {
      case "1":
        mainMenu();
        break;
      case "2":
        canCustomerLeave();
        break;
      default:
        display.clear();
        console.log("Unkown cmd");
        showCart();
    }
  });
};

module.exports = function eCommerce(reader) {
  cart = initCart();
  display = initDisplay(reader, cart);
  shop = initShop();
  mainMenu();
};
