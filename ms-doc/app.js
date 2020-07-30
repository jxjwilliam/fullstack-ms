const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const http = require('http')
const connectDb = require('./mongo-connect')

require('dotenv').config()

connectDb({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
})
const port = process.env.PORT || 10001

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', (req, res) => {
  res.status(200).send('MS-DOC works!')
})

app.use('/*', (req, res) => {
  const { url, params, query, body } = req;
  console.log('MS-DOC: ', url, params, query, body);
  res.sendStatus(404)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

const server = http.createServer(app)

server.listen(port)

server.on('error', function (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  switch (error.code) {
    case 'EACCES':
      console.error(`🈚️ ${bind} 需要提升的特权`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`⛳️ ${bind} 已在使用中`)
      process.exit(1)
    default:
      throw error
  }
})

server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  console.log(`✈️ basic-ms-api 服务正运行在端口 ${bind}`)
})
