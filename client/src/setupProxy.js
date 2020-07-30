const { createProxyMiddleware } = require('http-proxy-middleware')

const URLS = ['http://localhost', 'https://localhost']

require('dotenv').config()

// same as in bff/.env:
const MS_PORT_1 = process.env.PORT_1 || 10000
const MS_PORT_2 = process.env.PORT_2 || 10001

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/api', '/data', '/table', '/sms', '/rest'], {
      target: `${URLS[0]}:${MS_PORT_1}/`,
      changeOrigin: true,
    })
  )

  app.use(
    createProxyMiddleware('/sapi', {
      target: `${URLS[1]}:${MS_PORT_2}/`,
      changeOrigin: true,
      secure: false,
      https: true,
    })
  )
}

// TODO: graphql 如何代理？