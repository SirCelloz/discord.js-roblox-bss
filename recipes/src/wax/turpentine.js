const Turpentine = {
  superSmoothies: 10,
  caustic: 10,
  starJelly: 100,
  honeySuckle: 1000,

  total: (val) => {
    return {
      superSmoothies: Turpentine.superSmoothies * val,
      caustic: Turpentine.caustic * val,
      starJelly: Turpentine.starJelly * val,
      honeySuckle: Turpentine.honeySuckle * val,
    }
  }
}
