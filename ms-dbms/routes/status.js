const express = require('express');
const router = express.Router();
const controller = require('../controllers/statuses');

router.route('/')
  .get(controller.list)
  .post(controller.post)
  .put(controller.put);

router.route('/:id')
  .get(controller.get)
  .put(controller.put1)
  .delete(controller.delete1);

module.exports = router;
