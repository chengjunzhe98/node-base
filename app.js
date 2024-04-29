var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/chengjunzhe')
mongoose.connection.once('open', async () => {
  log('连接成功')
  const FamilySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    age: Number,
    gender: String,
  })

  const FamilyModel = mongoose.model('families', FamilySchema)

  await FamilyModel.create({
    name: 'chengjunzhe',
    age: 25,
    gender: 'man',
  }).then(
    (res) => {
      log('插入成功', res)
    },
    (err) => {
      log('插入失败', err)
    },
  )

  await FamilyModel.updateOne({ name: 'chengjunzhe' }, { gender: 'girl' }).then(
    (res) => {
      log('更新成功', res)
    },
    (err) => {
      log('更新失败', err)
    },
  )

  await FamilyModel.findOne({ name: 'chengjunzhe' }).then(
    (res) => {
      log('获取成功', res)
    },
    (err) => {
      log('获取失败', err)
    },
  )

  await FamilyModel.deleteOne({ name: 'chengjunzhe' }).then(
    (res) => {
      log('删除成功', res)
    },
    (err) => {
      log('删除失败', err)
    },
  )
})
mongoose.connection.on('error', () => {
  log('连接失败')
})
mongoose.connection.on('close', () => {
  log('连接关闭')
})
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var uploadRouter = require('./routes/upload')
const { log } = require('console')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/upload', uploadRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
