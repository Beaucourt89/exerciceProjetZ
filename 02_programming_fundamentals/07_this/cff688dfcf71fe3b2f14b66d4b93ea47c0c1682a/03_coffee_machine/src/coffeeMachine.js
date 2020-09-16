const machine = {
  litersOfCoffee: 0,

  fillWithLitersOfCoffee: function (litersOfCoffee) {
    this.litersOfCoffee += litersOfCoffee;
    return this;
  },

  littreActualise: function (laBoisson) {
    if (this.litersOfCoffee >= laBoisson) {
      this.litersOfCoffee = this.litersOfCoffee - laBoisson;
      return true;
    } else {
      return false;
    }
  },

  expresso: function () {
    return this.littreActualise(0.08);
  },

  longCoffee: function () {
    return this.littreActualise(0.15);
  },
};

module.exports = machine;
