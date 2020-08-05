const db = require('../models');

const Role = db.Role;

const list = (req, res, next) => {
  Role.findAll({attributes: ['id', 'name']})
    .then(roles => {
      res.json(roles)
    })
    .catch(next);
}

const get = (req, res, next) => {
  Role.findByPk(req.params.id)
    .then(role => res.json(role))
    .catch(next);
}

const get1 = (req, res, next) => {
  Role.findAll({
    where: {
      organization_id: req.params.oid
    },
    attributes: ['id', 'name']
  })
    .then(role => {
      if (role) {
        res.json(role).status(200);
      } else {
        res.json({role: 'Not Found'}).status(404);
      }
    })
    .catch(next);
}

const post = (req, res, next) => {
  Role.create(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next);
}

const put = (req, res, next) => {
  const id = req.params.id;
  Role.update(req.body, {where: {id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next);
}

const delete1 = (req, res, next) => {
  Role.destroy({
    where: {id: req.params.id}
  }).then(count => {
    res.json({"deleted": count});
  }).catch(next);
}

module.exports = {
  list,
  get,
  get1,
  post,
  put,
  delete1,
};