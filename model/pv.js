module.exports = class pv extends require('./model') {
  static getTotol() {
    return new Promise((resolve, reject) => {
      let sql = `SELECT SUM(hits) AS totol FROM pv`
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
