const express = require('express');
const router = express.Router();
const controller = require('../controllers/roles');

router.route('/')
  .get(controller.list)
  .post(controller.post);

router.route('/:oid')
  .get(controller.get1)
  .put(controller.put)
  .delete(controller.delete1);

module.exports = router;
