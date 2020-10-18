module.exports = {
  sendMsg(code="200", msg="success", content) {
    return {
      code,
      content,
      msg
    }
  }
}