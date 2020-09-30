import * as uuid from "uuid";
import moment from "moment";
import fs from "fs";

const save = () => {
  const jsonCustomers = JSON.stringify(customers, null, 2);
  fs.writeFileSync(process.cwd() + "/src/loyaltyCardManager/data/customers.json", jsonCustomers, "utf-8", 4);
};

const load = () => {
  const file = fs.readFileSync(process.cwd() + "/src/loyaltyCardManager/data/customers.json", "utf-8");
  const rawCustomers = JSON.parse(file);
  rawCustomers.forEach((customer) => create(customer));
};

const customers = [];

export const getAll = () => customers;
export const add = (customer) => customers.push(customer);

const customerFunctions = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  totalPurchase: function () {
    return this.purchaseHistory.reduce((acc, [_date, amount]) => acc + amount, 0);
  },
  addPurchase: function (amount) {
    this.purchaseHistory.push([moment(new Date()).format("D/MM/yyyy"), amount]);
    this.computeFidelityPoints();
    save();
  },
  computeFidelityPoints: function () {
    this.fidelityPoints = (this.totalPurchase() * 5) / 100 - this.usedFidelityPoints;
  },
};

export function create(customerData) {
  const customer = {
    purchaseHistory: [],
    usedFidelityPoints: 0,
    id: uuid.v4(),
    ...customerData,
    ...customerFunctions,
  };

  customer.computeFidelityPoints();
  add(customer);
  save();

  return customer;
}

load();