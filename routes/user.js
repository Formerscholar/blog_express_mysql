const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const { Jwtkey, outTime } = require('../conf/AppConfig')

const user = require('../middleware/user')
const utils = require('../utils/utils')

router.post('/', user.getUser, (req, res) => {
  const { User } = req
  req.session.user = User
  let created = new Date().getTime() + outTime 
  let token = jwt.encode(
    {
      data: User[0].username,
      exp: created ,
    },
    Jwtkey,
    'HS512'
  )
  res.json({ User, token })
})

router.get('/logout', (req, res) => {
  req.session.user = null
  req.user = null
  res.send(utils.sendMsg(200, 'logout OK'))
})

module.exports = router
