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

  static getPrevArticle(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT id,title FROM article WHERE id < ${id} ORDER BY id DESC LIMIT 1`
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

  static getNextArticle(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT id,title FROM article WHERE id > ${id} ORDER BY id ASC LIMIT 1`
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
  static addArticle({ title, content, hot, category_id, thumbnail }) {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO article SET title = '${title}', content = '${content}', hot = '${hot}', category_id = '${category_id}', thumbnail = '${thumbnail}'`
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
      let sql = `SELECT  COUNT(1) AS count FROM article`
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

  static getPage(page, category_id, hot) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT id,title,thumbnail,hot FROM article WHERE 1 = 1`
      sql +=
      category_id != -1 && category_id ? ` AND category_id = ${category_id}` : ''
      sql += hot != -1 && hot ? ` AND hot = ${hot}` : ''
      sql += ` ORDER BY time DESC LIMIT ${( page - 1) * 3},3`
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
  static setArticleHot(id,ishot) {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE article SET hot = ${ishot} WHERE id = ${id} LIMIT 1`
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
  static deleteArticle(id) {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM article WHERE id = ${id} LIMIT 1`
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
