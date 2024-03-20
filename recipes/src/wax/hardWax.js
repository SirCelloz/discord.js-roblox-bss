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
  }
};

module.exports = HardWax;