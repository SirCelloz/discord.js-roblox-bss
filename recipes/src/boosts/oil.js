const Oil = {
  sunflowerSeeds: 50,
  royalJellies: 10,

  total: (val) => {
    return {
      sunflowerSeeds: Oil.sunflowerSeeds * val,
      royalJellies: Oil.royalJellies * val,
    }
  }
}

module.exports = Oil;