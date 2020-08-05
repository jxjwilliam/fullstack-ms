const express = require('express');
const router = express.Router();
const verifySignUp = require('../auth/verifySignUp');
const authJwt = require('../auth/verifyJwtToken');
const controller = require('../controllers/auth');

router.route(['/login', '/signin'])
  .get(controller.get)
  .post(controller.signin)
  .put(controller.put)
  .delete(controller.delete1);

router.route(['/register', '/signup'])
  .get(controller.get)
  .post([verifySignUp.checkDuplicateUserNameOrEmail], controller.signup)
  .put(controller.put1)
  .delete(controller.delete1);


router.get('/signout', controller.signout);

module.exports = router;
