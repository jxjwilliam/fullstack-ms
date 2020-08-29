const express = require('express')
const router = express.Router()

const auth = require('../controllers/auth')
const {crud } = require('./crud')

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

router.post(['/login', '/signin'],
  auth.checkExisted,
  auth.verifyPassword,
  auth.signin
)

router.get(['/logout', '/signout'], auth.signout)

router.get('/authenticate', auth.authenticate)

const Account = crud('Account')
const Role = crud('Role')


// 3. /auth/account,
router.param('/account/id', Account.param);
router.route('/account')
  .get(Account.get)
  .post(Account.post)
router.route('/account/:id')
  .get(Account.get)
  .put(Account.put)
  .delete(Account.remove);

// 4. /auth/role
router.param('/role/id', Role.param);
router.route('/role')
  .get(Role.get)
  .post(Role.post)
router.route('/role/:id')
  .get(Role.get)
  .put(Role.put)
  .delete(Role.remove);

module.exports = router
