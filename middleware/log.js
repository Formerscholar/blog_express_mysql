const Log = require('../model/log')
const { setTimerType } = require('../utils/utils')

module.exports = {
  setlog: (req, res, next) => {
    Log.setlog({
      handle: req.handle,
      time: setTimerType(req.time),
      ip: req.iip,
    })
      .then((res) => {
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
}
