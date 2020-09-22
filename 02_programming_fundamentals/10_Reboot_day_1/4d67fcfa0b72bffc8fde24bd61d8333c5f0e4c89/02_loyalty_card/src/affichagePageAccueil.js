
import addNewCustomer from "./addNewCustomer.js";
import accessCuDa from "./AccessCustomerData.js";



const menu = () => {
  let txt = "";
  txt += "Welcome\n";
  txt += "************************************************\n";
  txt += "1 - Add new customer\n";
  txt += "2 - Access customer data\n";
  txt += "3 - Quit\n";
  return txt;
};

const choixMenu = (reader) => {
  reader.question("🤖 Choose an action \n", (choix) => {
    switch (choix) {
      case "1":
        addNewCustomer.arrive(reader);
        break;
      case "2":
        accessCuDa.arrive(reader);
        break;
      case "3":
        reader.close();
        break;

      default:
        break;
    }
  });
};

export default { menu, choixMenu };
