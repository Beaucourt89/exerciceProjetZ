const identityForm = (reader) => {

  reader.question("first name ", (name) => {
    reader.question("last name", (lastname) => {
      reader.question("What is your age? ", (age) => {
        console.log(`Your name is ${name} ${lastname} and you are ${age}.`);
        reader.close();
      });
    });
  });
};

module.exports = identityForm;

