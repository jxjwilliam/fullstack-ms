const db = require('../models')
const ERRORS = require('../config/constants').ERRORS;

const User = db.User;
const Op = db.Sequelize.Op;

const param = (req, res, next, id) => {
  User.findByPk(id)
    .then(user => {
      if (!user) {
        res.sendStatus(404);
      } else {
        req.user = user;
        next();
      }
    })
    .catch(next);
};

const listQuery = (req, res, next) => {
  User.findAll({
    where: req.query,
    include: [db.Organization, db.Role]
  })
    .then(users => {
      res.status(200).json(users);
    })
    .catch(next);
};

const list = (req, res, next) => {
  User.findAll({inclde: [{all: true}]})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(next);
};


//~: /:id
const get = (req, res, next) => {
  res.json(req.user)
};

const post1 = (req, res, next) => {
  User.findOrCreate({where: req.body})
    .then(data => res.json(data))
    .catch(next);
};

const post = (req, res, next) => {
  req.user.createRole(req.body)
    .then(res.send.bind(res))
    .catch(next);
};

//~: /:id
const put = (req, res, next) => {
  // we alreay got req.user from router.param
  req.user.update(req.body, {where: {id: req.params.id}})
    .then(count => {
      res.json({"updated": count});
    })
    .catch(next)
};

//~: /:id/role
const putRole = (req, res, next) => {
  req.user.addRole(req.body.roleId)
    .then(data => res.json(data))
    .catch(next);
};

// set, add, create`Associate`
//~: /:id/organization <https://www.youtube.com/watch?v=isk0JR0t_VQ>
const putOrganization = (req, res, next) => {
  req.user.setOrganization(req.body.organization_id)
    .then(data => res.json(data))
    .catch(next);
};

const delete1 = (req, res, next) => {
  // ?? const user_id = req.body.user_id;
  User.destroy({
    where: {id: req.params.id}
  }).then(count => {
    res.json({"deleted": count});
  }).catch(next);
};

const search = (req, res, next) => {
  let {term} = req.query;
  term = term.toLowerCase();
  User.findAll({
    where: {
      username: {
        [Op.like]: '%' + term + '%'
      }
    }
  })
    .then(users => res.send({users}))
    .catch(err => console.err(err));
};

module.exports = {
  param,
  list,
  get,
  post,
  put,
  putRole,
  putOrganization,
  delete1,
  search,
};