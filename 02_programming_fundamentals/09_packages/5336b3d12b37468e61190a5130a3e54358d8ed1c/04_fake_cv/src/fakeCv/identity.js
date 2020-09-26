const faker = require("faker");

module.exports = function () {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  return {
    firstName,
    lastName,
    city: faker.address.city(),
    phoneNumber: faker.phone.phoneNumber(),
    email: `${firstName}.${lastName}@fake.local`,
    avatar: faker.image.avatar(),
  };
};