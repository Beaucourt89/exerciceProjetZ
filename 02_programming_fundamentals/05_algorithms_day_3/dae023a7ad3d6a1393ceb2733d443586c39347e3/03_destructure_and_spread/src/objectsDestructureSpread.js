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

  const result = {
    user: { ...defaultConfig.user, ...config.user },
    hardware: { ...defaultConfig.hardware, ...config.hardware },
  };

  return result;
}

console.log(getConfig());

// const testID = {
//   // firstName: "John",
//   lastName: "Rambo",
//   address: { city: "Hope", country: "Canada" },
// };
const useri = { address: { country: "France" } };

function logInfos(user = {}) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };

  const userIdentify = {
    ...redactedUser,
    ...user,
    address: {
      ...redactedUser.address,
      ...user.address,
    },
  };

  console.log(`${userIdentify.firstName} ${userIdentify.lastName} lives in ${userIdentify.address.city}, ${userIdentify.address.country}.`);

}

logInfos();

module.exports = {
  getConfig,
  logInfos,
};
