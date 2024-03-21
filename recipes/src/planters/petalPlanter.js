const glitters = require('../boosts/glitters')
const superSmoothies = require('../boosts/superSmoothie')
const softWax = require('../wax/softWax')
const swirled = require('../wax/swirled')

const PetalPlanter = {
  magicBeans: 100,
  glitters: 100,
  softWax: 250,
  swirled: 50,
  superSmoothies: 25,

  totalAll : () => {
    return {
      Glitters: glitters.total(PetalPlanter.glitters),
      SoftWax: softWax.total(PetalPlanter.softWax),
      Swirled: swirled.totalFull(PetalPlanter.swirled),
      SuperSmoothies: superSmoothies.totalFull(PetalPlanter.superSmoothies),
    }
  },
}; 

module.exports = PetalPlanter;