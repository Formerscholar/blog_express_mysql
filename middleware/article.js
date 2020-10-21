const Article = require('../model/article')

module.exports = {
  getHot: (req, res, next) => {
    Article.getHot(req.query.limit)
      .then((res) => {
        req.hots = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getList: (req, res, next) => {
    Article.getList()
      .then((res) => {
        req.articles = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getListByCategoryId: (req, res, next) => {
    const { id } = req.query
    Article.getListByCategoryId(id)
      .then((res) => {
        req.articles = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },

  getListByKeywrod: (req, res, next) => {
    const { Keywrod } = req.body
    Article.getListByKeywrod(Keywrod)
      .then((res) => {
        req.Keywrod = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getArticleById: (req, res, next) => {
    const { id } = req.query
    Article.getArticleById(id)
      .then((res) => {
        req.article = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getPrevArticle: (req, res, next) => {
    const { id } = req.query
    Article.getPrevArticle(id)
      .then((res) => {
        req.article = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getNextArticle: (req, res, next) => {
    const { id } = req.query
    Article.getNextArticle(id)
      .then((res) => {
        req.article = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getAddArticle: (req, res, next) => {
    const { title, content, category_id } = req.body
    Article.AddArticle({ title, content, category_id })
      .then((res) => {
        req.ret = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getCount: (req, res, next) => {
    Article.getCount()
      .then((res) => {
        req.count = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getPage: (req, res, next) => {
    let { pages } = req.body
    pages = pages < 1 ? 1 : pages
    Article.getPage(pages)
      .then((res) => {
        req.page = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
}
