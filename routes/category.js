let express = require('express')
let router = express.Router()

const category = require('../middleware/category')


router.get('/list', category.getCategories,  (req, res) => {
  let { Categories } = req
  res.send({ Categories })
})

router.get('/CategoryById', category.getCategoryById,  (req, res) => {
  let { Category } = req
  res.send({ Category })
})

module.exports = router
