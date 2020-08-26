const User = require('../models/User');

const param = (req, res, next, id) => {
  User.findById(id, (err, user) => {
    if (err) next(err);
    else {
      req.user = user;
      next();
    }
  });
};

const list = (req, res, next) => {
  User.find(req.query, function (err, user) {
    if (err) next(err);
    else res.json(user);
  });
};

const get = (req, res, next) => res.json(req.user);

const put = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
    if (err) next(err);
    else res.json(user);
  });
};

const remove = (req, res, next) => {
  req.user.remove(err => {
    if (err) next(err);
    else res.json(req.user);
  })
};


module.exports = {
  param,
  list,
  get,
  put,
  remove,
};
