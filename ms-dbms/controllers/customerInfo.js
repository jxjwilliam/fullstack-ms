const db = require('../models');
const JSON_MSG = require('../config/constants').JSON_MSG;
const CustomerInfo = db.CustomerInfo;

const list = (req, res, next) => {
  CustomerInfo.findAll()
    .then(data => res.json(data))
    .catch(next);
};

//~: /:id
const get = (req, res, next) => {
  CustomerInfo.findByPk(req.params.id, {
    include: [{module: User, as: 'me'}]
  })
    .then(data => res.json(data))
    .catch(next);
};

const post = (req, res, next) => {
  CustomerInfo.findOrCreate({
    where: req.body
  })
    .then(data => res.json(data))
    .catch(next);
};

const put = (req, res, next) => {
  const id = req.params.id;
  CustomerInfo.update(req.body, {where: {id: id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next);
}

const delete1 = (req, res, next) => {
  CustomerInfo.destroy({
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