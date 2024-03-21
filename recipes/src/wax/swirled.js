const purplePotion = require('../boosts/purplePotion');
const softWax = require('./softWax');
const hardWax = require('./hardWax');

const Swirled = {
  hardWax: 3,
  softWax: 9,
  purplePotions: 6,
  royalJellies: 3333,

  total: (val) => {
    return {
      hardWax: Swirled.hardWax * val,
      softWax: Swirled.softWax * val,
      purplePotions: Swirled.purplePotions * val,
      royalJellies: Swirled.royalJellies * val,
    }
  },

  totalFull: (val) => {
    return {
      hardWax: hardWax.totalFull(val * Swirled.hardWax),
      softWax: softWax.totalFull(val * Swirled.softWax),
      purplePotions: purplePotion.totalFull(val * Swirled.purplePotions),
      royalJellies: Swirled.royalJellies * val,
    }
  }
};

module.exports = Swirled;