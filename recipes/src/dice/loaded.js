const LoadedDice = {
  smoothDice: 3,
  hardWax: 3,
  oil: 3,
  glue: 1,

  total: (val) => {
    return {
      smoothDice: LoadedDice.smoothDice * val,
      hardWax: LoadedDice.hardWax * val,
      oil: LoadedDice.oil * val,
      glue: LoadedDice.glue * val,
    }
  }
}

module.exports = LoadedDice;