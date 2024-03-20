const redExt = require('./redExt');
const blueExt = require('./blueExt');
const glue = require('./glue');

const PurplePotion = {
  neonBerries: 3,
  redExt: 3,
  blueExt: 3,
  glues: 3,

  total: (val) => {
    return {
      neonBerries: PurplePotion.neonBerries * val,
      redExt: PurplePotion.redExt * val,
      blueExt: PurplePotion.blueExt * val,
      glues: PurplePotion.glues * val,
    }
  },

  totalFull: (val) => {
    return {
      neonBerries: PurplePotion.neonBerries * val,
      redExt: redExt.total(val),
      blueExt: blueExt.total(val),
      glues: glue.total(val),
    }
  }
}

module.exports = PurplePotion;