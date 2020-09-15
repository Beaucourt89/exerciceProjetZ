// const userConfig = {
//   user: {
//     name: "John",
//     password: "123123",
//     admin: true,
//   },
//   hardware: {
//     CPUThreads: 2,
//   },
// };

function getConfig(config = {}) {
  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };
  return {
    ...defaultConfig,
    ...config,
    user: {
      ...defaultConfig.user,
      ...config.user,
    },
    hardware: {
      ...defaultConfig.hardware,
      ...config.hardware,
    },
  };
}

getConfig();

// const testID = {
//   // firstName: "John",
//   lastName: "Rambo",
//   address: { city: "Hope", country: "Canada" },
// };
//const useri = { address: { country: "France" } };

function logInfos(user = {}) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };

  const userIdentity = {
    ...redactedUser,
    ...user,
    address: {
      ...redactedUser.address,
      ...user.address,
    },
  };
  const {
    firstName,
    lastName,
    address: { city, country },
  } = userIdentity;

  console.log(`${firstName} ${lastName} lives in ${city}, ${country}.`);
}

logInfos();

module.exports = {
  getConfig,
  logInfos,
};
