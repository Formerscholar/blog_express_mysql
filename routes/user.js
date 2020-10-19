const express = require('express')
const router = express.Router()

const user = require('../middleware/user')
const Auth = require('../middleware/auth')
const {sendMsg} = require('../utils/utils')

router.post('/', [user.getUser, user.setToken], (req, res) => {
  const { User, token, ret } = req
  res.json({ User, token, ret })
})

router.get('/logout', Auth.getToken, (req, res) => {
  // req.session.user = null
  req.user = null
  res.send(sendMsg(200, 'logout OK'))
})

module.exports = router
