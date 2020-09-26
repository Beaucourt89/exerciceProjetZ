const humanFactory = (data = {}) => {
  return {
    genre: "male",
    firstName: `${data.genre === "female" ? "Jane" : "John"}`,
    lastName: "Doe",
    job: "unemployed",
    fullname: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    introduction: function () {
      return `Hello! My name is ${this.fullname()}.`;
    },
    ...data,
  };
};

const createHumans = (humans) => humans.map((human) => humanFactory(human));

module.exports = {
  humanFactory,
  createHumans,
};