const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
// let session = require('cookie-session')
// const Auth = require('./middleware/auth')
// const { outTime } = require('./conf/AppConfig')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const articleRouter = require('./routes/article')
const categoryRouter = require('./routes/category')
const tabsRouter = require('./routes/tabs')
const userRouter = require('./routes/user')
const PVRouter = require('./routes/pv')

const app = express()

const upload = multer({
  dest: './static/upload',
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
})

app.post('/?*', upload.single('uploadImg'), (req, res, nest) => {
  let { file } = req
  if (file) {
    let extname = path.extname(file.originalname)
    fs.renameSync(file.path,file.path+extname)
    req.uploadURL = '/upload/' + file.filename + extname
  }
  nest()
})

// const formidable = require('express-formidable')
// app.use(formidable())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(
//   session({
//     keys: ['chad'],
//     maxAge: outTime,
//   })
// )
// app.use((req, res, next) => {
//   req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
// })
// 权限验证
// app.use('(?!/user)', Auth.getUser)
app.use('/article', articleRouter)
app.use('/category', categoryRouter)
app.use('/tabs', tabsRouter)
app.use('/user', userRouter)
app.use('/pv', PVRouter)

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
