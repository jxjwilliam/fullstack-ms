const express = require('express')
const controller = require('../controllers/auth')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the AUTH API!',
    app: req.app,
    url: req.url,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    path: req.path,
    hostname: req.hostname,
    ip: req.ip,
    xhr: req.xhr,
    locals: res.locals
  })
})

router.post(['/register', '/signup'], controller.signup)

router.post(['/login', '/signin'], controller.signin)

router.get(['/logout', '/signout'], controller.signout)

router.get('/authenticate', controller.authenticate)

module.exports = router
