const createError = require('http-errors')
const express = require('express')
const path = require('path')
const httpProxy = require('http-proxy')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const expressJwt = require('express-jwt')

const app = express()

require('dotenv').config()

app.set('port', process.env.PORT)

const jwtSecretSalt = process.env.SECRET

app
  .use(favicon(path.join(__dirname, 'favicon.ico')))
  .use(cors())
  .use(logger('dev'))
  .use(helmet())
  .use(express.static(path.join(__dirname, 'build')))
  .use(express.static(path.join(__dirname, 'news-api-react')))

// 1. 测试接口
app.get('/', (req, res) => {
  res.status(200).send('Hello from BFF proxy server!')
})

const apiProxy = httpProxy.createProxyServer()
const { MS_AUTH, MS_DBMS, MS_DOC, MS_GRAPHQL, MS_DISCOVERY } = process.env

// 2. MS-AUTH
app.all('/auth/*', (req, res) => {
  console.log(`${req.url} redirects to ${MS_AUTH}`)
  apiProxy.web(req, res, { target: MS_AUTH })
})

/**
 * authentication: jsonwebtoke.sign -> algorithm(default='HS256')
 * without `next`: [HPM] Error occurred while trying to proxy request /data/stuff from localhost:3000 to
 * http://localhost:8081/ (ECONNRESET) (https://nodejs.org/api/errors.html#errors_common_system_errors)
 * 401 Unauthorized: {name: "UnauthorizedError", message: "jwt expired"}
 * { "name": "UnauthorizedError","message": "No authorization token was found","code": "credentials_required","status": 401}
 */
// eslint-disable-next-line consistent-return
app.use(expressJwt({ secret: jwtSecretSalt, algorithms: ['HS256'] }), (err, req, res) => {
  if (err.name) {
    const { name, message, status, code } = err
    return res.status(status).json({ name, message, code, status })
  }
})

// 3. `gateway` folder: cache all static data.
app.get('/data/:resource', (req, res) => {
  const r = req.params.resource
  const f = path.join(__dirname, 'data', `${r}.json`)
  res.sendFile(f)
})

app.all('/api/dbms/*', (req, res) => {
  console.log(`${req.url} redirects to ${MS_DBMS}`)
  apiProxy.web(req, res, { target: MS_DBMS })
})

app.all('/api/doc/*', (req, res) => {
  console.log(`${req.url} redirects to ${MS_DOC}`)
  apiProxy.web(req, res, { target: MS_DOC })
})

app.all('/graphql/*', (req, res) => {
  console.log(`${req.url} redirects to ${MS_GRAPHQL}`)
  apiProxy.web(req, res, { target: MS_GRAPHQL })
})

app.all('/discovery/*', (req, res) => {
  console.log(`${req.url} redirects to ${MS_DISCOVERY}`)
  apiProxy.web(req, res, { target: MS_DISCOVERY })
})

app.use(function (req, res, next) {
  const { url, params, query, body } = req
  console.error('BFF-路由服务器 无效URL: ', url, params, query, body)
  next(createError(404))
})

app.use(function (err, req, res) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
