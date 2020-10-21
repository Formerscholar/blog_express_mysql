module.exports = class Article extends require('./model') {
  static getCategories() {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,name,`index` FROM category ORDER BY `index` DESC'
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


  static getCategoryById(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM category WHERE id = ${id}`
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


  static getCount() {
    return new Promise((resolve, reject) => {
      let sql = `SELECT  COUNT(1) AS count FROM category`
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
