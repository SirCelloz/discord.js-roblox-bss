const FieldDice = {
  softWax: 1,
  whirligig: 1,
  redExt: 1,
  blueExt: 1,

  total: (val) => {
    return {
      softWax: FieldDice.softWax * val,
      whirligig: FieldDice.whirligig * val,
      redExt: FieldDice.redExt * val,
      blueExt: FieldDice.blueExt * val,
    }
  }
}

module.exports = FieldDice;