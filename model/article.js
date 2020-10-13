module.exports = class Article extends require('./model') {
  static getHot(num) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT id,title,content,time FROM article WHERE hot = 1 LIMIT ${num}`
      this.query(sql)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          console.log('获取文章失败', err.message)
          reject(err)
        })
    })
  }

  static getList() {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,title,content,time FROM article ORDER BY time DESC'
      this.query(sql)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          console.log('获取文章失败', err.message)
          reject(err)
        })
    })
  }

  static getListByCategoryId(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT id,title,content,time FROM article WHERE category_id = ${id} ORDER BY time DESC`
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

  static getListByKeywrod(Keywrod) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT id,title,content,time FROM article WHERE title LIKE '%${Keywrod}%' ORDER BY time DESC`
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

  static getArticleById(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT a.id,a.title,a.content,a.time,a.hits,a.category_id,c.name
FROM article a,category c 
WHERE a.id = ${id} AND a.category_id = c.id
      `
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
