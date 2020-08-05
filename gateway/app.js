const express = require('express')
const httpProxy = require('http-proxy')
const createError = require('http-errors')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const http = require('http')
const debug = require('debug')('gateway:app')

require('dotenv').config()

const app = express()

// app.use(favicon(path.join(__dirname, '../client/public', 'favicon.ico')))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

const port = process.env.PORT
app.set('port', port)

// 测试接口
app.get('/', (req, res) => {
  res.status(200).send('Hello from BFF proxy server!')
})

app.get('/data/:resource', (req, res) => {
  const r = req.params.resource
  const f = path.join(__dirname, 'resources', `${r}.json`)
  res.sendFile(f)
})

const apiProxy = httpProxy.createProxyServer()

const { MS_DBMS_URL, MS_DOC_URL } = process.env

app.all('/api/*', (req, res) => {
  console.log(`${req.url} redirects to ${MS_DBMS_URL}`)
  apiProxy.web(req, res, { target: MS_DBMS_URL })
})

app.all('/doc/*', (req, res) => {
  console.log(`${req.url} redirects to ${MS_DOC_URL}`)
  apiProxy.web(req, res, { target: MS_DOC_URL })
})

app.use('/*', (req, res) => {
  const { url, params, query, body } = req
  console.error('BFF-路由服务器 无效URL: ', url, params, query, body)
  res.sendStatus(404)
})

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

const server = http.createServer(app)

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
    default:
      throw error
  }
}

server.on('error', onError)

server.listen(port, () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  console.log(`BFF 代理服务正运行于端口 ${bind}`)
})
