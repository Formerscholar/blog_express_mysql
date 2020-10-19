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
    var $chars =
      'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' 
    var maxPos = $chars.length
    var pwd = ''
    for (i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
  },
}
