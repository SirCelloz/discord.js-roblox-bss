const gumdrops = require('./gumdrop');

const MoonCharm = {
  royalJelly: 1,
  pineapples: 5,
  gumdrops: 5,

  total: (val) => {
    return {
      royalJelly: MoonCharm.royalJelly * val,
      pineapples: MoonCharm.pineapples * val,
      gumdrops: MoonCharm.gumdrops * val,
    }
  },

  totalFull: (val) => {
    return {
      royalJelly: MoonCharm.royalJelly * val,
      pineapples: MoonCharm.pineapples * val,
      gumdrops: gumdrops.total(val * MoonCharm.gumdrops),
    }
  }
}

module.exports = MoonCharm;