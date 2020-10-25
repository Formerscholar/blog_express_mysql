let express = require('express')
let router = express.Router()
const Article = require('../middleware/article')
const Auth = require('../middleware/auth')


router.get('/hots', Article.getHot, function (req, res, next) {
  let { hots } = req
  res.send({ hots })
})

router.get('/list', Article.getList, (req, res) => {
  let { articles } = req
  res.send({ articles })
})

router.get('/ListByCategoryId', Article.getListByCategoryId, (req, res) => {
  let { articles } = req
  res.send({ articles })
})

router.post('/ListByKeywrod', Article.getListByKeywrod, (req, res) => {
  let { Keywrod } = req
  res.send({ Keywrod })
})

router.get('/ArticleById', Article.getArticleById, (req, res) => {
  let { article } = req
  res.send({ article })
})

router.get('/PrevArticle', Article.getPrevArticle, (req, res) => {
  let { article } = req
  res.send({ article })
})

router.get(
  '/NextArticle',
  [Article.getNextArticle, Auth.getToken],
  (req, res) => {
    let { article } = req
    res.json({ article })
  }
)

router.post(
  '/addArticle',
  [Article.addArticle, Auth.postToken],
  (req, res) => {
    let { ret } = req
    res.json({ ret })
  }
)

router.post('/getpage', [Article.getPage, Auth.postToken], (req, res) => {
  let { page } = req
  res.json({ data: page })
})

router.post('/setHot', [Article.setHot, Auth.postToken], (req, res) => {
  let { ret } = req
  res.json({ data: ret })
})

router.get('/delArticle', [Article.deleteArticle, Auth.getToken], (req, res) => {
  let { ret } = req
  res.json({ data: ret })
})




module.exports = router
