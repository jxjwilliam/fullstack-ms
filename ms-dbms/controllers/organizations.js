const db = require('../models');
const JSON_MSG = require('../config/constants').JSON_MSG;
const Organization = db.Organization;

// {attributes: ['id', 'name']}
const list = (req, res, next) => {
  Organization.findAll()
    .then(orgs => {
      res.json(orgs);
    })
    .catch(next);
};

const get = (req, res, next) => {
  Organization.findByPk(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const post = (req, res, next) => {
  Organization.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const put = (req, res, next) => {
  const id = req.params.id;
  Organization.update(req.body, {where: {id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next);
};

const delete1 = (req, res, next) => {
  Organization.destroy({
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