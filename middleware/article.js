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
  addArticle: (req, res, next) => {
    let { title, content, hot, category_id } = req.body
    Article.addArticle({
      title,
      content,
      hot,
      category_id,
      thumbnail: req.uploadURL,
    })
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
    let { page, category_id, hot } = req.body
    page = page < 1 ? 1 : page
    Article.getPage(page, category_id, hot)
      .then((res) => {
        req.page = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  setHot: (req, res, next) => {
    let { id, ishot } = req.body
    Article.setArticleHot(id, ishot)
      .then((res) => {
        req.handle = '更新热门'
        req.time = new Date()
        req.iip = '127.0.0.1'
        req.ret = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  deleteArticle: (req, res, next) => {
    let { id } = req.query
    Article.deleteArticle(id)
      .then((res) => {
        req.ret = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  updateArticle: (req, res, next) => {
    let { id, title, content, hot, thumbnail } = req.body
    Article.updateArticle({ id, title, content, hot, thumbnail })
      .then((res) => {
        req.ret = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
}
