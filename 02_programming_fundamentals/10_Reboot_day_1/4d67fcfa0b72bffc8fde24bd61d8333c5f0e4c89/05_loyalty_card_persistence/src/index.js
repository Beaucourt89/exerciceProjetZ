const fs = require("fs");

const customers = [];

const save = () => {
  const jsonCustomers = JSON.stringify(customers, null, 2);
  fs.writeFileSync(process.cwd() + "/src/data/customers.json", jsonCustomers, "utf-8");
};

const load = () => {
  const file = fs.readFileSync(process.cwd() + "/src/data/customers.json", "utf-8");
  const rawCustomers = JSON.parse(file);
  rawCustomers.forEach(someOperation);
};

const someOperation = (customer) => {
  console.log(customer);
  customers.push();
};

load();