const BlueExt = {
  blueBerries: 50,
  royalJellies: 10,

  total: (val) => {
    return {
      blueBerries: BlueExt.blueBerries * val,
      royalJellies: BlueExt.royalJellies * val,
    }
  }
}

module.exports = BlueExt;