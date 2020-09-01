const express = require('express');
const router = express.Router();
const verifySignUp = require('../../ms-auth/controllers/verifySignUp');
const authJwt = require('../../ms-auth/controllers/verifyJwtToken');
const controller = require('../controllers/auth');

router.route(['/login'])
  .get(controller.get)
  .post(controller.signin)
  .put(controller.put)
  .delete(controller.delete1);

router.route(['/register'])
  .get(controller.get)
  .post([verifySignUp.checkDuplicateUserNameOrEmail], controller.signup)
  .put(controller.put1)
  .delete(controller.delete1);


router.get('/logout', controller.signout);

module.exports = router;
