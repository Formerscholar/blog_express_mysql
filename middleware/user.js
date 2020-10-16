const User = require('../model/user')

module.exports = {
  getUser: (req, res, next) => {
    const { username, password } = req.body
    User.getUser({ username, password })
      .then((res) => {
        req.User = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
}
