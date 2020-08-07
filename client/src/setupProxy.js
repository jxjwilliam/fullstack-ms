const { createProxyMiddleware } = require('http-proxy-middleware')

const URLS = ['http://localhost', 'https://localhost']

require('dotenv').config()

// same as in bff/.env:
const MS_BFF_PORT = process.env.BFF_PORT
const MS_SSL_PORT = process.env.BFF_SSL_PORT

const local_ms = ['/api', '/doc']
const static_ms = ['/data', '/mock', '/table']
const other_ms = ['/sms', '/rest']

module.exports = function (app) {
  app.use(
    createProxyMiddleware([...local_ms, ...static_ms, ...other_ms], {
      target: `${URLS[0]}:${MS_BFF_PORT}/`,
      changeOrigin: true,
    })
  )

  app.use(
    createProxyMiddleware('/sapi', {
      target: `${URLS[1]}:${MS_SSL_PORT}/`,
      changeOrigin: true,
      secure: false,
      https: true,
    })
  )
}

// TODO: graphql 如何代理？
