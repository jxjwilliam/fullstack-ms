const {JSON_MSG, ERRORS} = require('../config/constants').JSON_MSG;

const db = require('../models');
const Financing = db.Financing;

/**
 * search all with query condition
 *  Here we can use req.query to match against tests if we need to.
 *  this allows us to use routes like /tests?user=william
 *  if no query is present, there is no `where` condition to match against, so everything is returned, neat!
 */
const listQuery = (req, res, next) => {
  Financing.findAll({
    where: req.query,
    include: [{all: true}]
  })
    .then(data => res.json(data))
    .catch(next);
}

const listAll = (req, res, next) => {
  Financing.findAll()
    .then(data => res.json(data))
    .catch(next);
};

const list = listAll;

//~: /:id
const get = (req, res, next) => {
  Financing.findByPk(req.params.id)
    .then(test => res.json(test))
    .catch(next);
}

const get1 = (req, res, next) => {
  Financing.findOne({
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

  // Financing.findOrCreate({where: req.body});
  Financing.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(next);
};

const put = (req, res, next) => {
  const id = req.params.id;
  Financing.update(req.body, {where: {id: id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next);
};

const put1 = (req, res, next) => {
  const id = req.params.id;
  Financing.findOneAndUpdate({id})
    .then(data => {
      res.json(JSON_MSG);
    })
    .catch(next);
};

const put2 = (req, res, next) => {
  const id = req.params.id;
  Financing.findByPk(req.params.id)
    .then(test => {
      return test.setUser(req.body.uid);
    })
    .then(data => res.json(data))
    .catch(next);
};

const delete1 = (req, res, next) => {
  Financing.destroy({
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
};