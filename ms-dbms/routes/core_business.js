const express = require('express')
const router = express.Router();
const controller = require('../controllers/corebusinesses')

router.route('/')
  .get(controller.list)
  .post(controller.post);

router.route('/:id')
  .get(controller.get)
  .put(controller.put)
  .delete(controller.delete1);

module.exports = router;