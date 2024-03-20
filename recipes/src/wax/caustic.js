const Caustic = {
  hardWax: 5,
  enzymes: 5,
  neonBerries: 25,
  royalJellies: 5252,

  total: (val) => {
    return {
      hardWax: Caustic.hardWax * val,
      enzymes: Caustic.enzymes * val,
      neonBerries: Caustic.neonBerries * val,
      royalJellies: Caustic.royalJellies * val,
    }
  }
};

module.exports = Caustic;