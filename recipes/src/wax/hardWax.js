const softWax = require('./softWax');
const enzymes = require('../boosts/enzymes');

const HardWax = {
  softWax: 3,
  enzymes: 3,
  bitterBerries: 33,
  royalJellies: 33,

  total: (val) => {
    return {
      softWax: HardWax.softWax * val,
      enzymes: HardWax.enzymes * val,
      bitterBerries: HardWax.bitterBerries * val,
      royalJellies: HardWax.royalJellies * val,
    }
  },

  totalFull: (val) => {
    return {
      softWax: softWax.totalFull(val * HardWax.softWax),
      enzymes: enzymes.total(val * HardWax.enzymes),
      bitterBerries: HardWax.bitterBerries * val,
      royalJellies: HardWax.royalJellies * val,
    }
  }
};

module.exports = HardWax;