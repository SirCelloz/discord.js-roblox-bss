const Swirled = {
  hardWax: 3,
  softWax: 9,
  purplePotions: 6,
  royalJellies: 3333,

  total: (val) => {
    return {
      hardWax: Swirled.hardWax * val,
      softWax: Swirled.softWax * val,
      purplePotions: Swirled.purplePotions * val,
      royalJellies: Swirled.royalJellies * val,
    }
  }
};

module.exports = Swirled;