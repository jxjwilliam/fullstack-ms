const proxy = require('http-proxy-middleware')

const URLS = ['http://localhost', 'https://localhost']

require('dotenv').config()

// same as in bff/.env:
const MS_PORT_1 = process.env.PORT_1 || 10000
const MS_PORT_2 = process.env.PORT_2 || 10001

module.exports = function (app) {
  app.use(
    proxy(['/api', '/data', '/table', '/sms', '/rest'], {
      target: `${URLS[0]}:${MS_PORT_1}/`,
      changeOrigin: true,
    })
  )

  app.use(
    proxy('/sapi', {
      target: `${URLS[1]}:${MS_PORT_2}/`,
      headers: {
        Connection: 'keep-alive',
      },
      changeOrigin: true,
      secure: false,
      https: true,
    })
  )
}
