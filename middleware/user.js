// const jwt = require('jwt-simple')
const User = require('../model/user')
// const { Jwtkey, outTime, tokenHeader } = require('../conf/AppConfig')
const { randomString } = require('../utils/utils')
const { outTime } = require('../conf/AppConfig')

module.exports = {
  getUser: (req, res, next) => {
    const { username, password } = req.fields
    User.getUser({ username, password })
      .then((res) => {
        req.User = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  setToken: (req, res, next) => {
    let Users = req.User
    // req.session.user = Users
    // let created = new Date().getTime() + outTime
    // let token = jwt.encode(
    //   {
    //     data: Users[0].id,
    //     exp: created,
    //   },
    //   Jwtkey,
    //   'HS512'
    // )
    // let tokenArr = token.split('.')
    // if (tokenHeader == tokenArr[0]) {
    //   req.token = tokenArr[1] + '.' + tokenArr[2]
    // }
    let token = randomString(32)
    req.token = token
    User.setTokenOutTime({
      id: Users[0].id,
      token,
      outTime: Math.floor(new Date().getTime()/1000) + outTime,
    })
      .then((res) => {
        req.ret = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
}
