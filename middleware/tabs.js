const Tabs = require('../model/tabs')

module.exports = {
  getTabs: (req, res, next) => {
    Tabs.getTabs()
      .then((res) => {
        req.tabs = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
  getTabById: (req, res, next) => {
    const {id} = req.query
    Tabs.getTabById(id)
      .then((res) => {
        req.tab = res
        next()
      })
      .catch((err) => {
        next(err)
      })
  },
}
