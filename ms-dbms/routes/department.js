const express = require('express')
const router = express.Router();
const controller = require('../controllers/departments')

router.route('/')
  .get(controller.list)
  .post(controller.post);

router.route('/:oid')
  .get(controller.get)
  .put(controller.put)
  .delete(controller.delete1);

module.exports = router;