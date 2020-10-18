const jwt = require('jwt-simple')
const { Jwtkey } = require('../conf/AppConfig')

module.exports = {
  getUser: (req, res, next) => {
    if (req.session.user) {
      req.user = req.session.user
      next()
    } else {
      res.send('未登录')
    }
  },
  getToken: (req, res, next) => {
    const { token } = req.query
    let result = jwt.decode(token, Jwtkey, true) || {}
    if (new Date().getTime() < result.exp) {
      next()
    } else {
      res.send('token过期')
    }
  },
  postToken: (req, res, next) => {
    const { token } = req.body
    let result = jwt.decode(token, Jwtkey, true) || {}
    if (new Date().getTime() < result.exp) {
      next()
    } else {
      res.send('token过期')
    }
  },
}
