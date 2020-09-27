//fichier qui gere que la partie affichage
import * as display from "./display.js";
import * as customer from "./customer.js";
let R;

const ask = (question, callback) => R.question(`${question}\n>`, callback);

//
const getCustomerInfo = () => {
  ask("first name", (firstName) => {
    ask("last name", (lastName) => {
      ask("email", (email) => {
        ask("birth date", (birthDate) => {
          ask("city", (city) => {
            ask("country", (country) => {
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
              customer.create(customerData);
              const customers = customer.getAll();
              loyaltyCardManager(R);
            });
          });
        });
      });
    });
  });
};

const choseCustomer = () => {
  const customers = customers.getAll();
  const fullNames = customers.map((customer) => customer.fullNames());
  console.log(fullNames);
  display.displayMenu(fullNames);
  ask("Choose a customer", (index) => {
    const customer = customers[index - 1];
    customerActions(customer);
  });
};

const customerActions = (customer) => {
  display.displayMenu(["Show customer", "Add purchase", "Quit"]);
  ask("Choose an action", (action) => {
    switch (action) {
      case "1":
        display.displayCustomer(customer);
        customerActions(customer);
        break;
      // case "2":
      //   choseCustomer();
      //   //accessCuDa.arrive(reader);
      //   break;
      // case "3":
      //   console.log("Bye !");
      //   R.close();
      //   break;

      default:
        console.log("Unknow command");
        loyaltyCardManager(R);
        break;
    }
  });
};

//Crée une Fonction qui lance l'Application
export default function loyaltyCardManager(reader) {
  R = reader;

  console.log("Welcome to loyaltyCardManager");
  //utilise la function displaymenu qui liste avec l'index le menu ci-dessous
  display.displayMenu(["Add new customer", "Access customer data", "Quit"]);
  ask("Choose an action", (action) => {
    switch (action) {
      case "1":
        console.log("*** Customer added ***");
        getCustomerInfo();
        //addNewCustomer.arrive(reader);
        break;
      case "2":
        choseCustomer();
        //accessCuDa.arrive(reader);
        break;
      case "3":
        console.log("Bye !");
        R.close();
        break;

      default:
        console.log("Unknow command");
        loyaltyCardManager(R);
        break;
    }
  });
}
