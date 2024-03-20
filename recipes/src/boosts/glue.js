const Glue = {
  gumdrops: 50,
  royalJellies: 10,

  total: (val) => {
    return {
      gumdrops: Glue.gumdrops * val,
      royalJellies: Glue.royalJellies * val,
    }
  }
}

module.exports = Glue;