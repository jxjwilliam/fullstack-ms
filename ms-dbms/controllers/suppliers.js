const db = require('../models');
const JSON_MSG = require('../config/constants').JSON_MSG;
const Supplier = db.Supplier;

const list = (req, res, next) => {
  Supplier.findAll()
    .then(data => {
      res.json(data);
    })
};

const get = (req, res, next) => {
  Supplier.findByPk(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const post = (req, res, next) => {
  Supplier.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const put = (req, res, next) => {
  const id = req.params.id;
  Supplier.update(req.body, {where: {id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next);
};

const delete1 = (req, res, next) => {
  Supplier.destroy({
    where: {id: req.params.id}
  }).then(count => {
    res.json({"deleted": count});
  }).catch(next);
};

module.exports = {
  list,
  get,
  post,
  put,
  delete1,
}