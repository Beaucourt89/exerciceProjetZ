export const printList = (list) => console.log(list.map((el, i) => `${i + 1} - ${el}`).join("\n"));

export const listCustomers = (customers) => {
  console.log(customers.map((c, i) => `${i + 1} - ${c.fullName()}`).join("\n"));
};

export const displayCustomer = (customer) => {
  console.log("Customer information:");
  console.log("Name:            ", customer.fullName());
  console.log("Email:           ", customer.email);
  console.log("Address:         ");
  console.log(" - City:         ", customer.address.city);
  console.log(" - Country:      ", customer.address.country);
  console.log("Total purchase:  ", customer.totalPurchase());
  console.log("Fidelity points: ", customer.fidelityPoints);
};

export const showPurchaseHistory = (history) =>
  history.forEach(([date, amount]) => console.log(`${date} - ${amount}€`));