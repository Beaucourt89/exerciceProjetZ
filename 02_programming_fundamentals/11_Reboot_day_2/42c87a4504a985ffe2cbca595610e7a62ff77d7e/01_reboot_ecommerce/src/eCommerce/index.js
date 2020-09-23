let READER;
const articles = [
  {
    designation: "beer",
    price: 4,
    quantity: 300,
  },
  {
    designation: "chips",
    price: 2,
    quantity: 25,
  },
  {
    designation: "cheese",
    price: 3,
    quantity: 50,
  },
  {
    designation: "olives",
    price: 1,
    quantity: 200,
  },
  {
    designation: "waterBottles",
    price: 0.5,
    quantity: 1000,
  },
];
const tabtab = [];

const printElement = (action, index) => console.log(`${index + 1} ${action}`);

function printMenu(actionsList) {
  console.clear();
  console.log("**************************************************");
  console.log("MENU");
  console.log("**************************************************");
  actionsList.forEach(printElement);
}

function menu(action) {
  switch (action) {
    case "1":
      console.clear();
      printBuyAProduct(articles);
      break;
    case "2":
      console.clear();
      printBuyACard();
      break;
    case "3":
      console.clear();
      //checkout();
      break;
    case "4":
      console.log("Work hard!");
      READER.close();
      break;
    default:
      console.log("⚠️Cmd unknown⚠️");
      eCommerce(READER);
  }
}

const printArticleElements = (articles, index) =>
  console.log(`${index + 1} ${articles.designation} : ${articles.price}€ (quantity: ${articles.quantity})`);

function printBuyAProduct() {
  console.clear();
  console.log("**************************************************");
  console.log("SHOP");
  console.log("**************************************************");
  articles.forEach(printArticleElements);
  READER.question("Choose a product \n>", (choix) => {
    if (choix !== "q") {
      READER.question("How much? \n>", (cb) => {
        //console.log(choix);
        console.log(articles[choix - 1]);
        const result = articles[choix - 1].quantity - cb;
        articles[choix - 1].quantity = result;
        console.log(articles[choix - 1]);
        tabtab.push(articles[choix - 1].designation, parseInt(cb) * articles[choix - 1].price);

        printBuyAProduct();
      });
    } else {
      eCommerce(READER);
    }
  });
}

function printBuyACard() {
  console.clear();
  console.log("**************************************************");
  console.log("CARD");
  console.log("**************************************************");
  console.log(tabtab);
  console.log(`Tu as acheté ${tabtab[1]} : ${tabtab[0]} `);
  console.log(`Total =  ${tabtab[1]+tabtab[3]}`);

  tabtab.forEach();
}
// function addBuyProduct(reader) {
//   reader.question("", (taskName) => {
//     const panier = {
//       designation,
//       price,
//       quantity,
//     };
//     articles.push(panier);
//     console.log("🤖 article added");
//     eCommerce(READER);
//   });
// }

// function menuShop(action) {
//   switch (action) {
//     case "1":
//       console.clear();
//       printBuyAProduct(articles);
//       break;
//     case "2":
//       console.clear();
//       //showCart();
//       break;
//     case "3":
//       console.clear();
//       //checkout();
//       break;
//     case "4":
//       console.log("Work hard!");
//       READER.close();
//       break;
//     default:
//       console.log("⚠️Cmd unknown⚠️");
//       eCommerce(READER);
//   }
// }

function eCommerce(reader) {
  READER = reader;
  printMenu(["Buy a product", "Show cart", "Checkout", "Quit"]);
  reader.question("🤖 Choose an action\n> ", (action) => {
    menu(action);
  });
}

// function showCart(params) {}
// function checkout(params) {}

module.exports = eCommerce;
