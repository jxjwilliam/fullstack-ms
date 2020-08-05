const jwt = require('jsonwebtoken');
const config = require('../config/constants');
const db = require('../models/index');
const Role = db.Role;
const User = db.User;

const verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      auth: false, message: 'No access token provided.'
    });
  }

  jwt.verify(token, config.SECRET, (err, decoded) => {
    if (err) {
      return res.send({
        auth: false,
        msg: 'Fail to Authentication. Error -> ' + err
      });
    }
    req.userId = decoded.id;
    next();
  });
}

const isAdmin = (req, res, next) => {
  User.findById(req.userId)
    .then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name.toUpperCase() === "ADMIN") {
            next();
            return;
          }
        }

        res.status(403).send("Require Admin Role!");
        return;
      })
    })
}

const isPmOrAdmin = (req, res, next) => {
  User.findById(req.userId)
    .then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name.toUpperCase() === "PM") {
            next();
            return;
          }

          if (roles[i].name.toUpperCase() === "ADMIN") {
            next();
            return;
          }
        }

        res.status(403).send("Require PM or Admin Roles!");
      })
    })
}

module.exports = {
  verifyToken,
  isAdmin,
  isPmOrAdmin
};