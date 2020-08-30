const express = require('express')
const router = express.Router()

const auth = require('../controllers/auth')
const {crud, middleware: {notFound} } = require('../controllers/utils')
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


const accountRouter = express.Router()
const accounts = crud(Account)

const roleRouter = express.Router()
const roles = crud(Role)


// 3. /auth/account,
accountRouter.param('id', accounts.param)

accountRouter.route('/')
  .get(accounts.list)
  .post(accounts.create)

accountRouter.route('/:id')
  .get(accounts.read)
  .put(accounts.update)
  .delete(accounts.delete);

accountRouter.use(notFound)


// 4. /auth/role
roleRouter.param('id', roles.param);

roleRouter.route('/')
  .get(roles.list)
  .post(roles.create)

roleRouter.route('/:id')
  .get(roles.read)
  .put(roles.update)
  .delete(roles.delete)
roleRouter.use(notFound)

router.use('/account', accountRouter)
router.use('/role', roleRouter)

module.exports = router
