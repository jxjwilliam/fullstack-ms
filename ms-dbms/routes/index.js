import express  from 'express';
import auth from './auth'
import circulation from './circulation'
import core_business from './core_business'
import customer_info from './customer_info'
import department from './department'
import financing from './financing'
import flow from './flow'
import supplier from './supplier'
import issue from './issue'
import organization from './organization'
import role from './role'
import status from './status'
import users from './user'

const router = express.Router();

const PLAIN_MSG = require('../config/constants');

router.get('/', (req, res, next) => {
  res.status(200).send(PLAIN_MSG);
});

module.exports = {
  index: router,
  auth,
  users,
  role,
  circulation,
  supplier,
  financing,
  customer_info,
  core_business,
  department,
  issue,
  organization,
  flow,
  status,
};
