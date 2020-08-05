const express = require('express')
const router = express.Router();
const controller = require('../controllers/flow');

router.route('/')
  .get(controller.list)
  .post(controller.post);

router.route('/:id')
  .get(controller.get)
  .put(controller.put)
  // .put(controller.put1)
  .delete(controller.delete1);

// router.put('/:id/user', controller.put2);

module.exports = router;