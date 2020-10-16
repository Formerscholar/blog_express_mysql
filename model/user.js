// SELECT id,username FROM user WHERE username = 'admin' AND password = '123456'
module.exports = class User extends require('./model') {
  static getUser({ username, password }) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT id,username FROM user WHERE username = '${username}' AND password = '${password}'`
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
