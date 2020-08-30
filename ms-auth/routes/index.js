const express = require('express')
const router = express.Router()

const auth = require('../controllers/auth')
const {crud, middleware: {notFound} } = require('../controllers/utils')

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
const Account = crud('Account')

const roleRouter = express.Router()
const Role = crud('Role')


// 3. /auth/account,
accountRouter.param('id', Account.param)

accountRouter.route('/')
  .get(Account.list)
  .post(Account.create)

accountRouter.route('/:id')
  .get(Account.read)
  .put(Account.update)
  .delete(Account.delete);

accountRouter.use(notFound)


// 4. /auth/role
roleRouter.param('id', Role.param);

roleRouter.route('/')
  .get(Role.list)
  .post(Role.create)

roleRouter.route('/:id')
  .get(Role.read)
  .put(Role.update)
  .delete(Role.delete)
roleRouter.use(notFound)

router.use('/account', accountRouter)
router.use('/role', roleRouter)

module.exports = router
