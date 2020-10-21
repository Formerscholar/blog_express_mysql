const Pv = require('../model/pv')

module.exports = {
  getTotol: (req, res, next) => {
    Pv.getTotol()
      .then((res) => {
        req.totol = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
}
