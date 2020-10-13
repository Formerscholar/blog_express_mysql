module.exports = class Article extends require('./model') {
  static getTabs() {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,name,article_id FROM tabs'
      this.query(sql)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          console.log('获取失败', err.message)
          reject(err)
        })
    })
  }
  static getTabById(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT id,name FROM tabs WHERE article_id = ${id}`
      this.query(sql)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          console.log('获取失败', err.message)
          reject(err)
        })
    })
  }
}
