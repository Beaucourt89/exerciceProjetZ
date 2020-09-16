const car = {
  // km: 0,
  // min: 0,

  //1er fonction
  start: function () {
    this.km = 0;
    this.min = 0;
    this.distance = 0;
    
    return this;
  },

  //2em fonction
  changeSpeed: function (km) {
    this.km = km;

    return this;
  },

  //3em fonction
  drive: function (min) {
    this.min = min;
    this.distance += (this.km * this.min) / 60;

    return this;
  },

  //4em fonction
  showDistance: function () {
    console.log(this.distance + " Km");

    return this;
  },
};

module.exports = car;
