const Glitters = {
  moonCharms: 25,
  magicBeans: 1,

  total: function(val) {
    const total = {
      moonCharms: this.moonCharms * val,
      magicBeans: this.magicBeans * val,
    }

    return total;
  }
};

module.exports = Glitters;
