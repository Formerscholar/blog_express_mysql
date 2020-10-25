module.exports = {
  sendMsg(code = '200', msg = 'success', content) {
    return {
      code,
      content,
      msg,
    }
  },
  randomString(len) {
    len = len || 32
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    var maxPos = $chars.length
    var pwd = ''
    for (i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
  },
  setTimerType(timer) {
    let d = new Date(timer)
    let ConvertedYear = d.getFullYear().toString()
    let ConvertedMonth = (d.getMonth() + 1).toString()
    let ConvertedDate = d.getDate().toString()
    let ConvertedHours = d.getHours().toString()
    let ConvertedMinutes = d.getMinutes().toString()
    let ConvertedSeconds = d.getSeconds().toString()
    ConvertedMonth =
      ConvertedMonth.length < 2 ? '0' + ConvertedMonth : ConvertedMonth
    ConvertedDate =
      ConvertedDate.length < 2 ? '0' + ConvertedDate : ConvertedDate
    ConvertedHours =
      ConvertedHours.length < 2 ? '0' + ConvertedHours : ConvertedHours
    ConvertedMinutes =
      ConvertedMinutes.length < 2 ? '0' + ConvertedMinutes : ConvertedMinutes
    ConvertedSeconds =
      ConvertedSeconds.length < 2 ? '0' + ConvertedSeconds : ConvertedSeconds
    return `${ConvertedYear}-${ConvertedMonth}-${ConvertedDate} ${ConvertedHours}:${ConvertedMinutes}:${ConvertedSeconds}`
  },
}
