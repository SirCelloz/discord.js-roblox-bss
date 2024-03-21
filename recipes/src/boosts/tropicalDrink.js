const oil = require('./oil');
const enzymes = require('./enzymes');

const TropicalDrink = {
  coconuts: 10,
  enzymes: 2,
  oils: 2,

  total: (val) => {
    return {
      coconuts: TropicalDrink.coconuts * val,
      enzymes: TropicalDrink.enzymes * val,
      oils: TropicalDrink.oils * val,
    }
  },

  totalFull: (val) => {
    return {
      coconuts: TropicalDrink.coconuts * val,
      enzymes: enzymes.total(val * TropicalDrink.enzymes),
      oils: oil.total(val * TropicalDrink.oils),
    }
  }
}

module.exports = TropicalDrink;