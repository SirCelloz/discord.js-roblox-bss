const starJellies = require('./starJellies');
const purplePotion = require('./purplePotion');
const tropicalDrink = require('./tropicalDrink');

const SuperSmoothies = {
  neonBerries: 3,
  starJellies: 3,
  purplePotions: 3,
  tropicalDrinks: 6,

  total: (val) => {
    return {
      neonBerries: SuperSmoothies.neonBerries * val,
      starJellies: SuperSmoothies.starJellies * val,
      purplePotions: SuperSmoothies.purplePotions * val,
      tropicalDrinks: SuperSmoothies.tropicalDrinks * val,
    }
  },

  totalFull: (val) => {
    return {
      neonBerries: (SuperSmoothies.neonBerries * SuperSmoothies.purplePotions + purplePotion.neonBerries) * val,
      starJellies: starJellies.totalFull(val * SuperSmoothies.starJellies),
      purplePotions: purplePotion.totalFull(val * SuperSmoothies.purplePotions),
      tropicalDrinks: tropicalDrink.totalFull(val * SuperSmoothies.tropicalDrinks),
    }
  }
};

module.exports = SuperSmoothies;