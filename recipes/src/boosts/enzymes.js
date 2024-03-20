const Enzymes = {
  pineapples: 50,
  royalJellies: 10,

  total: (val) => {
    return {
      pineapples: Enzymes.pineapples * val,
      royalJellies: Enzymes.royalJellies * val,
    }
  }
}

module.exports = Enzymes;