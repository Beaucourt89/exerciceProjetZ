//costumers [] stocke les clients dans l'appli
//import uuid sert a importer un id unique
import * as uuid from "uuid";

function fullName() {
  return `${this.firstName} ${this.lastName}`;
}

const customers = [
  {
    id: "67da2e38-626b-41e1-a6f1-2fe06fa6604d",
    firstName: "Marie",
    lastName: "Dupont",
    email: "marie@hotmail.fr",
    address: { city: "Lille", country: "France" },
    birthDate: "12/12/2001",
    fidelityPoints: 0,
    purchaseHistory: [],
    fullName,
  },
  {
    id: "67da2e38-626b-41e1-a6f1-2fe06fa6604d",
    firstName: "Jhonn",
    lastName: "Doe",
    email: "Jhonn@hotmail.fr",
    address: { city: "Rome", country: "Italie" },
    birthDate: "12/12/2012",
    fidelityPoints: 0,
    purchaseHistory: [],
    fullName,
  },
];

export const create = (customerData) => {
  customers.push({
    id: uuid.v4(),
    firstName: customerData.firstName,
    lastName: customerData.lastName,
    email: customerData.email,
    Address: customerData.Address,
    birthDate: customerData.birthDate,
    fidelityPoint: 0,
    purchaseHistory: [],
    fullName,
    addPurchase: function (purchase) {
      this.purchaseHistory(purchase);
    },
  });
};

export const getAll = () => customers;
// [
//   {
// id: '67da2e38-626b-41e1-a6f1-2fe06fa6604d',
// firstName: 'Marie',
// lastName: 'Dupont',
// email: 'marie@hotmail.fr',
// birthDate: '12/12/2001',
// city: 'Lille',
// country: 'France',
// fidelityPoints: 0,
// purchaseHistory: [],
//     purchaseAmount: 0,
//     fullname: function () {
//       return this.firstname + " " + this.lastname;
//     },
//   },
// ];

//export default { customer, listeCostumer };
// Customer information:
// Name:             Alice Cooper
// Email:            alice.cooper@fake.local
// Address:
//  - City:          New York
//  - Country:       United States of America
// Total purchase:   1529
// Fidelity points:  76.45
