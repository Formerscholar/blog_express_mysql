const express = require('express')
const router = express.Router()

const tab = require('../middleware/tabs')

router.get('/list', tab.getTabs, (req, res) => {
  const { tabs } = req
  res.send({ tabs })
})

router.get('/tabById', tab.getTabById, (req, res) => {
  const { tab } = req
  res.send({ tab })
})

module.exports = router
