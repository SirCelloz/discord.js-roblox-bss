const glitters = require('./glitters');

const StarJelly = {
  royalJellies: 100,
  glitters: 3,

  total: (val) => {
    return {
      royalJellies: StarJelly.royalJellies * val,
      glitters: StarJelly.glitters * val,
    }
  },

  totalFull: (val) => {
    return {
      royalJellies: StarJelly.royalJellies * val,
      glitters: glitters.total(val * StarJelly.glitters),
    }
  }
}

module.exports = StarJelly;