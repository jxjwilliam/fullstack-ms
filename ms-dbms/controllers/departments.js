const db = require('../models');
const JSON_MSG = require('../config/constants').JSON_MSG;
const Department = db.Department;

const list = (req, res, next) => {
  Department.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const get = (req, res, next) => {
  console.log('get->req.params.oid', req.params.oid);
  Department.findAll({
    where: {
      organization_id: req.params.oid
    }
  })
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const post = (req, res, next) => {
  Department.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const put = (req, res, next) => {
  const id = req.params.id;
  Department.update(req.body, {where: {id: id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next);
}

const delete1 = (req, res, next) => {
  Department.destroy({
    where: {id: req.params.id}
  })
    .then(count => {
      res.json({"deleted": count});
    })
    .catch(next);
}

module.exports = {
  list,
  get,
  post,
  put,
  delete1,
}