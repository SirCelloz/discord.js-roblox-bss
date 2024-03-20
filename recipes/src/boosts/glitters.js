const Glitters = {
  moonCharms: 25,
  magicBeans: 1,

  total: (val) => {
    return {
      moonCharms: Glitters.moonCharms * val,
      magicBeans: Glitters.magicBeans * val,
    }
  }
};

module.exports = Glitters;