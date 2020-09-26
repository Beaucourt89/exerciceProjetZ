const faker = require("faker");

module.exports = function () {
  return {
    catchPhrase: faker.company.catchPhrase(),
    description: faker.lorem.paragraph(),
  };
};