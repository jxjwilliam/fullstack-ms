const db = require('../models');
const JSON_MSG = require('../config/constants').JSON_MSG;
const Flow = db.Flow;

const list = (req, res, next) => {
  Flow.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const get = (req, res, next) => {
  Flow.findByPk(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const post = (req, res, next) => {
  Flow.findOrCreate({where: req.body})
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const put = (req, res, next) => {
  const id = req.params.id;
  Flow.update(req.body, {where: {id: id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next);
};

const delete1 = (req, res, next) => {
  Flow.destroy({
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
};