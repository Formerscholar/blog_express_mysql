let express = require('express')
let router = express.Router()

const user = require('../middleware/user')

router.post('/', user.getUser, (req, res) => {
  let { User } = req
  res.json({ User })
})

module.exports = router
