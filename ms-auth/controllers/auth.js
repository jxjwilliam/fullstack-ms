const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require('../models/Account');

require('dotenv').config();
const SECRET = process.env.SECRET;

// email + phone => unique
// username => unique
    function checkExisted(req, res, next) {
  const {username, email, phone} = req.body
  User.findOne({ username, email, phone }, (err, user) => {
    if (err) res.send(err)
    else if(user) res.send(user)
    else next()
  });
}

function hashPassword(req, res, next) {
  const { password } = req.body
  // pre-save: user.password = bcrypt.hashSync(user.password, 10);
  bcrypt.hash(password, 10, (err, hashed) => {
    if (err) return res.send(err);
    req.body.password = hashed;
    next();
  })
}

function signup (req, res, next) {
  const user = new User(req.body);
  user.save(err => {
    if (err) res.send(err)
    const { password, ...others } = user
    res.json(others)
  });
}

function verifyPassword(req, res, next) {
  const {} = req.body
  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ auth: false, accessToken: null, msg: "口令无效!" });
  }

}

// 注册的时候issue。
const signin = async (req, res, next) => {
  if (user) {
    const { password, timestamp, ...userInfo } = user;
    const token = jwt.sign(userInfo, SECRET, { expiresIn: 86400 }); // expires in 24 hours

    return res.status(200).json({ auth: true, accessToken: token });
  }
};

function signout (req, res, next) {
  return res.status(200).json({ msg: '退出' });
};

/**
 * 验证 Token
 * GET https://localhost/api/userOrders
 *  Authorization: Bearer JWT_ACCESS_TOKEN
 */
function authenticate (req, res, next) {
  const token = req.headers["x-access-token"] || req.body.token || req.params["token"];

  if (token) {
    jwt.verify(token, SECRET, (error, decoded) => {
      if (error) return res.status(403).json({ msg: "auth认证失败。" });
      else {
        req.decoded = decoded;
        req.userId = decoded._id;
        console.log('auth认证---> ', req.decoded);
        next();
      }
    });
  }
  else {
    return res.status(401).json({ msg: "auth token不存在。" });
  }
}


function checkRole (req, res, next) {
  User.findById(req.params._id, (err, role) => {
    if(err) res.send(err)
    next()
  })
}

module.exports = {
  checkExisted,
  hashPassword,
  signup,
  verifyPassword,
  signin,
  signout,
  authenticate,
}
