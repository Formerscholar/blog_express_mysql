// const jwt = require('jwt-simple')
// const { Jwtkey, tokenHeader } = require('../conf/AppConfig')
const User = require('../model/user')

module.exports = {
  // getUser: (req, res, next) => {
  //   if (req.session.user) {
  //     req.user = req.session.user
  //     next()
  //   } else {
  //     res.send('未登录')
  //   }
  // },
  getToken: (req, res, next) => {
    const { token } = req.query
    User.selectOutTimeByToken(token)
      .then((result) => {
        // let result = jwt.decode(tokenHeader + '.' + token, Jwtkey, true) || {}
        if (Math.floor(new Date().getTime() / 1000) < result[0].outTime) {
          User.updateTokenOutTime(token)
          next()
        } else {
          res.send('token过期')
        }
      })
      .catch((err) => {
        next(err)
      })
  },
  postToken: (req, res, next) => {
    const { token } = req.body
    User.selectOutTimeByToken(token)
      .then((result) => {
        // let result = jwt.decode(tokenHeader + '.' + token, Jwtkey, true) || {}
        if (Math.floor(new Date().getTime() / 1000) < result[0].outTime) {
          User.updateTokenOutTime(token)
          next()
        } else {
          res.send('token过期')
        }
      })
      .catch((err) => {
        next(err)
      })
  }
}
