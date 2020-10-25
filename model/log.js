module.exports = class Log extends require('./model') {
  static setlog({ handle, time, ip }) {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO log SET handle='${handle}',time='${time}',ip='${ip}'`
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
