const mysql = require('mysql')

module.exports = class Model {
  static conn = null
  static connection() {
    Model.conn = mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '123456',
      database: 'blog',
    })
    Model.conn.connect((err) => {
      if (err) {
        console.log('数据库链接错误', err)
      }
    })
  }
  static end() {
    if (null != Model.conn) {
      Model.conn.end()
    }
  }
  static query(sql) {
    return new Promise((resolve, reject) => {
      this.connection()
      Model.conn.query(sql, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
      this.end()
    })
  }
}
