const express = require('express')
const router = express.Router()

const auth = require('./auth')
const {routing, middleware: {notFound} } = require('./utils')
const Account = require('../models/Account')
const Role = require('../models/Role')

// 1. http://localhost:3000/auth
router.get('/', (req, res) => {
  const {app, url, baseUrl, originalUrl, path, hostname, ip, xhr} = req
  const { locals } = res
  res.json({
    message: 'Welcome to the AUTH API!',
    app, url, baseUrl, originalUrl, path, hostname, ip, xhr,
    locals
  })
})

// 2. /auth/register...
const {isNotExist, hashPassword, register} = auth
router.post(['/register', '/signup'], isNotExist, hashPassword, register)

/**
 * 3. /auth/login
 * req:
 *   originalUrl="/auth/login"
 *   baseUrl="/auth"
 *   url="/login"
 *   statusCode=null, statusMessage=null
 */
const {isExist, verifyPassword, issueToken, login} = auth
router.post(['/login', '/signin'], isExist, verifyPassword, issueToken, login)


router.get(['/logout', '/signout'], auth.signout)


router.get('/authenticate', auth.authenticate)


router.use('/account', routing(Account))
router.use('/role', routing(Role))

router.use(notFound)

module.exports = router
