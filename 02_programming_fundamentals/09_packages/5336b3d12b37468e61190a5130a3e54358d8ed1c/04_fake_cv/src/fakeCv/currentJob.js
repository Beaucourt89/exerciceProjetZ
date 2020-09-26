const faker = require("faker");

module.exports = function () {
  return {
    companyName: faker.company.companyName(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobTitle: faker.name.jobTitle(),
  };
};