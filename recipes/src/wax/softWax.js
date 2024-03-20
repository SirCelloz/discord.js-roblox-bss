const SoftWax = {
  honeySuckles: 5,
  oil: 1,
  enzymes: 1,
  royalJellies: 10,

  total: (val) => {
    return {
      honeySuckles: SoftWax.honeySuckles * val,
      oil: SoftWax.oil * val,
      enzymes: SoftWax.enzymes * val,
      royalJellies: SoftWax.royalJellies * val,
    }
  }
};

module.exports = SoftWax;