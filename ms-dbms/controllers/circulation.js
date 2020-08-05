const db = require('../models/index');
const config = require('../config/constants');

const Circulation = db.Circulation;
const Op = db.Sequelize.Op;
const JSON_MSG = config.JSON_MSG;

const list = (req, res, next) => {
  Circulation.findAll()
    .then(data => res.json(data))
    .catch(next);

};

const get = (req, res, next) => {
  Circulation.findByPk(req.params.id)
    .then(admin => res.status(200).json(admin))
    .catch(next);
};

const get1 = (req, res, next) => {
  Circulation.findOne({
    where: {id: req.params.id},
    attributes: ['name', 'account'],
    include: [{
      model: Role,
      attributes: ['id', 'name'],
      through: {
        attributes: ['userId', 'roleId'],
      }
    }]
  }).then(admin => {
    res.status(200).json(admin);
  }).catch(next);
}

const post = (req, res, next) => {
  Circulation.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const put = (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  Circulation.update(body, {where: {id: id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next);
};

const delete1 = (req, res, next) => {
  Circulation.destroy({where: {id: req.params.id}})
    .then(count => {
      res.json({"deleted": count});
    })
    .catch(next);
};

module.exports = {
  list,
  get,
  get1,
  post,
  put,
  delete1,
}