const Category = require('../model/category')

module.exports = {
  getCategories: (req, res, next) => {
    Category.getCategories()
      .then((res) => {
        req.Categories = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getCategoryById(req, res, next) {
    const { id } = req.query
    Category.getCategoryById(id)
      .then((res) => {
        req.Category = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getCount(req, res, next) {
    Category.getCount()
      .then((res) => {
        req.Count = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
}
