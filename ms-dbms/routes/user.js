const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

// We will use router.param to match any route with an ':id' param in it.
// this callback function will run anytime the route matches that param
// generally, we want to use router.param() to put objects on the req object itself
// here, we perform the findByPk and add the instance of the user at req.user

router.param('id', controller.param);

router.route('/')
  .get(controller.list)
  .post(controller.post);

router.route('/:id')
  .get(controller.get)
  .put(controller.put)
  .delete(controller.delete1);

router.put('/:id/role', controller.putRole);

router.put('/:id/organization', controller.putOrganization);

module.exports = router;