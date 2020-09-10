import express  from 'express';
import seed from './seed'
import user from './user'

const router = express.Router();

const PLAIN_MSG = require('../config/constants');
router.get('/', (req, res, next) => {
  res.status(200).send(PLAIN_MSG);
});

module.exports = {
  index: router,
  user,
  seed,
};
