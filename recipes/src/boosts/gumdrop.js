const Gumdrop = {
  pineapples: 3,
  strawBerries: 3,
  blueBerries: 3,

  total: (val) => {
    return {
      pineapples: Gumdrop.pineapples * val,
      strawBerries: Gumdrop.strawBerries * val,
      blueBerries: Gumdrop.blueBerries * val,
    }
  }
}

module.exports = Gumdrop;