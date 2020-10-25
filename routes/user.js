const express = require('express')
const router = express.Router()
const Log = require('../middleware/log')
const user = require('../middleware/user')
const Auth = require('../middleware/auth')
const { sendMsg } = require('../utils/utils')

router.post('/', [user.getUser,  Log.setlog, user.setToken], (req, res, next) => {
  const { User, token, ret } = req
  res.json({ User, token, ret })
})

router.get('/logout', Auth.getToken, (req, res) => {
  // req.session.user = null
  req.user = null
  res.send(sendMsg(200, 'logout OK'))
})

module.exports = router
