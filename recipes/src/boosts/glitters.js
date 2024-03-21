const moonCharm = require('./moonCharm');

const Glitters = {
  moonCharms: 25,
  magicBeans: 1,

  total: (val) => {
    return {
      moonCharms: Glitters.moonCharms * val,
      magicBeans: Glitters.magicBeans * val,
    }
  },

  totalFull: (val) => {
    return {
      moonCharms: moonCharm.totalFull(val) * Glitters.moonCharms,
      magicBeans: Glitters.magicBeans * val,
    }
  }
};

module.exports = Glitters;