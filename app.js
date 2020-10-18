let createError = require('http-errors')
let express = require('express')
let cookieParser = require('cookie-parser')
let logger = require('morgan')
let session = require('cookie-session')
const Auth = require('./middleware/auth')
const { outTime } = require('./conf/AppConfig')

let articleRouter = require('./routes/article')
let categoryRouter = require('./routes/category')
let tabsRouter = require('./routes/tabs')
let userRouter = require('./routes/user')

let app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  session({
    keys: ['chad'],
    maxAge: outTime,
  })
)
// 权限验证
app.use('(?!/user)', Auth.getUser)
app.use('/article', articleRouter)
app.use('/category', categoryRouter)
app.use('/tabs', tabsRouter)
app.use('/user', userRouter)

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
