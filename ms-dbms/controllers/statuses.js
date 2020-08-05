const db = require('../models');

const JSON_MSG = require('../config/constants').JSON_MSG;

const Status = db.Status;

/**
 * search all with query condition
 *  ?query='william'
 */
const list1 = (req, res, next) => {
  const query = {where: req.query}
  Status.findAll({
    include: [User]
  })
    .then(data => res.json(data))
    .catch(next);
}

const list = (req, res, next) => {
  Status.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

// '/:id'
//{include: [{model: User, as: 'users'}]}
const get = (req, res, next) => {
  Status.findByPk(req.params.id)
    .then(test => res.json(test))
    .catch(next);
};

const get1 = (req, res, next) => {
  Status.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const post = (req, res, next) => {
  Status.findOrCreate({
    where: req.body
  })
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const put = (req, res, next) => {
  Status.update(req.body, {where: {id: req.params.id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next);
}

const put1 = (req, res, next) => {
  const id = req.params.id;
  Status.findOneAndDelete({id})
    .then(data => {
      res.json(JSON_MSG);
    })
    .catch(next);
}

const put2 = (req, res, next) => {
  Status.findByPk(req.params.id)
    .then(test => {
      return test.setUser(req.params.id);
    })
    .then(data => res.json(data))
    .catch(next);
}

const delete1 = (req, res, next) => {
  Status.destroy({
    where: {id: req.params.id}
  }).then(count => {
    res.json({"deleted": count});
  }).catch(next);
}

module.exports = {
  list,
  get,
  post,
  put,
  put1,
  put2,
  delete1,
}