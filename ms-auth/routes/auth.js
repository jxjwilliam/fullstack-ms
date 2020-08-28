const express = require('express')
const auth = require('../controllers/auth')

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

router.post(['/register', '/signup'],
  auth.checkUnique,
  auth.hashPassword,
  auth.signup
)

router.post(['/login', '/signin'],
  auth.checkExisted,
  auth.verifyPassword,
  auth.signin
)

router.get(['/logout', '/signout'], auth.signout)

router.get('/authenticate', auth.authenticate)

module.exports = router
