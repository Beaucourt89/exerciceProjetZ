const identity = require("./identity");
const motivation = require("./motivation");
const currentJob = require("./currentJob");

module.exports = function () {
  return {
    identity: identity(),
    motivation: motivation(),
    currentJob: currentJob(),
  };
};