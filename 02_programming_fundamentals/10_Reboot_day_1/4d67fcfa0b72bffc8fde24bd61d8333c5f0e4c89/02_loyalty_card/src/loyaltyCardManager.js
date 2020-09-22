import * as display from "./display.js";

export default function loyaltyCardManager(reader) {
  console.log("Welcome to loyalCardManager!");
  display.displayMenu(["Add new customer", "Access customer data"]);
  reader.question("Choose an action", (action) => {
    switch (action) {
      case "1":
        console.log("customer added");
        loyaltyCardManager(R);
        break;
      case "2":
        console.log("customer added");
        loyaltyCardManager(R);
        break;
      default:
        console.log("Unknow command");
        loyaltyCardManager(R);
        break;
    }
  });
}
