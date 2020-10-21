let express = require('express')
let router = express.Router()
const Pv = require('../middleware/pv')
const Article = require('../middleware/article')
const Category = require('../middleware/category')
const Auth = require('../middleware/auth')

router.get(
  '/totol',
  [Auth.getToken, Pv.getTotol, Article.getCount, Category.getCount],
  (req, res) => {
    let { totol, count, Count } = req
    res.json({ totol, count, Count })
  }
)

module.exports = router
