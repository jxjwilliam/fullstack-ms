const express = require('express')

const router = express.Router()
const controller = require('../controllers/auth')

router.route(['/register', '/signup', '/user', '/auth']).post(controller.signup)

router.route(['/login', '/signin']).post(controller.signin)

router.get(['/logout', '/signout'], controller.signout)

router.get('/authenticate', controller.authenticate)

module.exports = router
