const express = require('express')
const router = express.Router()

const auth = require('./auth')
const {crud, routing, middleware: {notFound} } = require('./utils')
const Account = require('../models/Account')
const Role = require('../models/Role')

// 1. http://localhost:3000/auth
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


// 2. /auth/login...
router.post(['/register', '/signup'],
  auth.checkExisted,
  auth.hashPassword,
  auth.signup
)

/**
 * req:
 *   originalUrl="/auth/login"
 *   baseUrl="/auth"
 *   url="/login"
 *   statusCode=null, statusMessage=null
 */
router.post(['/login', '/signin'],
  auth.checkAccountExist,
  auth.verifyPassword,
  auth.signin
)

router.get(['/logout', '/signout'], auth.signout)

router.get('/authenticate', auth.authenticate)


router.use('/account', routing(Account))
router.use('/role', routing(Role))

module.exports = router
