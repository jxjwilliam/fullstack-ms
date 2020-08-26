const db = require('../models/index');
const {ERRORS, SECRET, JSON_MSG} = require('../config/constants');
const User = db.User;
const Role = db.Role;
const Organization = db.Organization;
const Op = db.Sequelize.Op;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = (req, res, next) => {
  const {
    account,
    name,
    password, phone, email,
    department_id,
    organization_id,
    role_id
  } = req.body;

  User.create({
    account,
    name,
    email, phone,
    organization_id,
    role: parseInt(role_id),
    password: bcrypt.hashSync(password, 8)
  })
    .then(user => {
      user.setOrganization(organization_id);
      user.addRole(role_id);
      res.json(user);
    });
  // .then(user => {
  //   Role.find({
  //     where: {
  //       id: user.RoleId
  //     }
  //   }).catch(err => {
  //     res.json({msg: "Fail! Error -> " + err}); //status(500).
  //   })
  // })
}

const signin = (req, res, next) => {

  User.findOne({
    where: {account: req.body.user},
    attributes: ['id', 'account', 'name', 'organization_id', 'password'],
    include: [{
      model: Role,
      attributes: ['id', 'name'],
      through: {
        attributes: ['userId', 'roleId'],
        // where: {active: true}
      },
    }, {
      model: Organization,
      attributes: ['id', 'name'],
    }],
  }).then(user => {
    if (!user) {
      return res.json({msg: '该用户不存在'}).status(404);
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({auth: false, accessToken: null, msg: "口令无效!"});
    }
    return user;

  }).then(user => {
    const token = jwt.sign({id: user.id}, SECRET, {
      expiresIn: 86400 // expires in 24 hours
    });

    // TODO: change!
    const oid = JSON.parse(JSON.stringify(user.Organization));
    const rids = JSON.parse(JSON.stringify(user.Roles)).reduce((t, r) => [...t, {id: r.id, name: r.name}], []);

    const loginInfo = {
      id: user.id,
      account: user.account,
      name: user.name,
      oid: oid.id, // undefined: user.organization_id,
      oname: oid.name,
      rid: rids
    };

    console.log('--- loginInfo ---: ', loginInfo);

    res.status(200).json({auth: true, accessToken: token, loginInfo});

  }).catch(err => {
    res.json({msg: 'Error -> ' + err});
  });
};

const authenticate = (req, res, next) => {

  const token = req.body.token || req.params["token"] || req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.json({success: false, message: "Failed to authenticate token."});
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    // if there is no token, return an error
    return res.status(403).send({
      success: false,
      message: ERRORS.no_token
    });
  }
};

const get = (req, res, next) => {
  res.json(JSON_MSG)
};

const delete1 = (req, res, next) => {
  User.destroy({
    where: {id: req.params.id}
  })
    .then(count => {
      res.json({"deleted": count});
    })
    .catch(next);
};

const put = (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  User.update(
    body,
    {where: {id}}
  ).then(count => {
    res.json({"updated": count});
  }).catch(next);
};

// active=false
const put1 = (req, res, next) => {
  User.update(
    {active: false},
    {where: {id: req.params.id}}
  ).then(count => {
    res.json({"updated": count})
  }).catch(next);
};

const signout = (req, res, next) => {
  res.json(JSON_MSG)
};

module.exports = {
  signup,
  signin,
  authenticate,
  get,
  put,
  put1,
  delete1,
  signout
}
