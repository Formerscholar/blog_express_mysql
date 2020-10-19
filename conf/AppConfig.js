const Port = 3666
const Jwtkey = 'chad'
const outTime = 60 * 30 // 30分钟过期
const tokenHeader = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9'
module.exports = {
  Port,
  Jwtkey,
  outTime,
  tokenHeader,
}
