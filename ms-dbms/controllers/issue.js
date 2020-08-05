const db = require('../models');
const JSON_MSG = require('../config/constants').JSON_MSG;
const Issue = db.Issue;

const list = (req, res, next) => {
  Issue.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const get = (req, res, next) => {
  Issue.findByPk(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const post = (req, res, next) => {
  Issue.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

/**
 * data.get({ plain: true }),
 * data.toJSON(),
 * data.get("id")
 * JSON.stringify(data)
 * JSON.parse(JSON.stringify(row, null, 4))
 */
const put = (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  Issue.update(
    body,
    {where: {id: id}}
  ).then(count => {
    res.json({"updated": count});
  }).catch(next);
};

const delete1 = (req, res, next) => {
  Issue.destroy({
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