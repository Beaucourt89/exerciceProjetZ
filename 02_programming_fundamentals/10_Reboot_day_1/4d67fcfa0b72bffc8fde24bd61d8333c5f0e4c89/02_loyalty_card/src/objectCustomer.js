const listeCostumer = [];

const customer = [
  {
    id: '67da2e38-626b-41e1-a6f1-2fe06fa6604d',
    firstName: 'Marie',
    lastName: 'Dupont',
    email: 'marie@hotmail.fr',
    birthDate: '12/12/2001',
    city: 'Lille',
    country: 'France',
    fidelityPoints: 0,
    purchaseHistory: [],
    purchaseAmount: 0,
    fullname: function () {
      return this.firstname + " " + this.lastname;
    },
  },
];

console.log(customer);

export default { customer, listeCostumer };
// Customer information:
// Name:             Alice Cooper
// Email:            alice.cooper@fake.local
// Address:
//  - City:          New York
//  - Country:       United States of America
// Total purchase:   1529
// Fidelity points:  76.45
