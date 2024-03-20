const SmoothDice = {
  field: 3,
  softWax: 3,
  whirligig: 3,
  oil: 3,

  total: (val) => {
    return {
      field: SmoothDice.field * val,
      softWax: SmoothDice.softWax * val,
      whirligig: SmoothDice.whirligig * val,
      oil: SmoothDice.oil * val,
    }
  }
}

module.exports = SmoothDice;