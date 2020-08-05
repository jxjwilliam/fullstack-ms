const db = require('../models/index');
const constants = require('../config/constants');
const User = db.User;
const Role = db.Role;

// email should be unique:
// TODO: create index and unique key on `email`
const checkDuplicateUserNameOrEmail = (req, res, next) => {

  console.log('--- william 888 ---: ', req.body, User, Role);

  // -> Check Username is already in use
  User.findOne({
    where: {
      account: req.body.account
    }
  }).then(user => {
    if (user) {
      res.send({msg: "Fail -> 该用户已经存在!"}); // status(400)
      return;
    }
    next();
  });
}

const checkRolesExisted = (req, res, next) => {

  console.log('--- william 999 ---: ', req.body);

  next();
}

module.exports = {
  checkDuplicateUserNameOrEmail,
  checkRolesExisted
};