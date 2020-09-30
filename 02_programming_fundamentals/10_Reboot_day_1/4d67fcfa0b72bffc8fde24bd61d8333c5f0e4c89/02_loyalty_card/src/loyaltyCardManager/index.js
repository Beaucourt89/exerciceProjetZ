import * as CUSTOMERS from "./customers.js";
import * as display from "./display.js";

let R;

const clear = () => console.log("\x1B[2J\x1B[0f");

const blank = (title = null) => {
  console.log("********************************************************");
  if (title) {
    console.log(title.toUpperCase());
    console.log("********************************************************");
  }
};

const ask = (question, callback) => R.question(`\n🤖 ${question}\n> `, callback);

const listCustomers = () => {
  const customers = CUSTOMERS.getAll();
  display.listCustomers(customers);
};

const addPurchase = (customer) => {
  clear();
  blank(`${customer.fullName()} - add purchase`);
  ask("Purchase amount", (amount) => {
    customer.addPurchase(parseFloat(amount));
    customerActions(customer);
  });
};

const useFidelityPoints = (customer) => {
  blank(`${customer.fullName()} - use fidelity points`);
  console.log(`${customer.fullName()} has ${customer.fidelityPoints} points.`);
  ask("How many fidelity points are used?", (amount) => {
    customer.fidelityPoints -= amount;
    customerActions(customer);
  });
};

const createCustomer = () => {
  clear();
  blank("create new customer");
  ask("- first name:>", (firstName) => {
    ask("- last name:>", (lastName) => {
      ask("- email:>", (email) => {
        ask("- birth date:>", (birthDate) => {
          ask("- city:>", (city) => {
            ask("- country:>", (country) => {
              const customerData = {
                firstName,
                lastName,
                birthDate,
                email,
                address: {
                  city,
                  country,
                },
              };

              const customer = CUSTOMERS.create(customerData);
              customerActions(customer);
            });
          });
        });
      });
    });
  });
};

const showCustomer = (customer) => {
  blank(`${customer.fullName()}'s information`);
  display.displayCustomer(customer);
  customerActions(customer);
};

const showPurchaseHistory = (customer) => {
  blank(`${customer.fullName()}'s purchase history`);
  display.showPurchaseHistory(customer.purchaseHistory);
  customerActions(customer);
};

const customerRouter = (choice, customer) => {
  clear();
  switch (choice) {
    case "1":
      showCustomer(customer);
      break;
    case "2":
      addPurchase(customer);
      break;
    case "3":
      useFidelityPoints(customer);
      break;
    case "4":
      showPurchaseHistory(customer);
      break;
    case "5":
      chooseCustomer();
      break;
    case "6":
      run();
      break;
    case "7":
      blank("closing");
      R.close();
      break;
  }
};

const chooseCustomer = () => {
  clear();
  blank("choose a customer");
  listCustomers();
  ask("Choose a customer", (index) => {
    const customer = CUSTOMERS.getAll()[index - 1];
    customerActions(customer);
  });
};

const customerActions = (customer) => {
  blank(`${customer.fullName()}`);
  display.printList([
    "Show account",
    "Add purchase",
    "Use fidelity points",
    "Show purchase history",
    "Choose another customer",
    "Back to menu",
    "Quit",
  ]);
  ask(`Choose an action${customer ? " for " + customer.fullName() : ""}`, (choice) => {
    customerRouter(choice, customer);
  });
};

function run() {
  blank();
  display.printList(["Add new customer", "Access customer data", "Quit"]);
  ask("Choose an action", (choice) => {
    switch (choice) {
      case "1":
        createCustomer();
        break;
      case "2":
        chooseCustomer();
        break;
      case "3":
        blank("closing");
        R.close();
        break;
    }
  });
}

export default function start(reader) {
  R = reader;
  console.log("Welcome");
  run();
}