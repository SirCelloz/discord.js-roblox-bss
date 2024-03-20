const RedExt = {
  strawBerries: 50,
  royalJellies: 10,

  total: (val) => {
    return {
      strawBerries: RedExt.strawBerries * val,
      royalJellies: RedExt.royalJellies * val,
    }
  }
}

module.exports = RedExt;