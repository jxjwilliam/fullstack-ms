const { createProxyMiddleware } = require('http-proxy-middleware')

const URLS = ['http://localhost', 'https://localhost']

require('dotenv').config()

// same as in bff/.env:
const MS_BFF_PORT = process.env.BFF_PORT

const localMs = ['/auth', '/api']
const staticMs = ['/data', '/graphql']
const otherMs = ['/sms', '/rest']

module.exports = function (app) {
  app.use(
    createProxyMiddleware([...localMs, ...staticMs, ...otherMs], {
      target: `${URLS[0]}:${MS_BFF_PORT}/`,
      changeOrigin: true,
    })
  )
}
