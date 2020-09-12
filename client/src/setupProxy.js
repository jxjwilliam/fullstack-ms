const { createProxyMiddleware } = require('http-proxy-middleware')

const URLS = ['http://localhost', 'https://localhost']

require('dotenv').config()
// same as in bff/.env:
const MS_BFF_PORT = process.env.BFF_PORT

// bff delegates. others like '/gitbook' are configured through Nginx location.
// TODO: built-client `build` put in Nginx/root or gateway ???
const localMs = ['/auth']
const authenticationMs = ['/api', '/data', '/graphql', '/discovery']
const otherMs = ['/sms', ]

module.exports = function (app) {
  app.use(
    createProxyMiddleware([...localMs, ...authenticationMs, ...otherMs], {
      target: `${URLS[0]}:${MS_BFF_PORT}/`,
      changeOrigin: true,
    })
  )
}
