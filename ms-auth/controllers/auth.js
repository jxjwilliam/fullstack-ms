const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Account = require('../models/Account');

require('dotenv').config();
const SECRET = process.env.SECRET;

// email + phone => unique
// username => unique
function checkExisted(req, res, next) {
  const {username, email, phone} = req.body
  Account.findOne({ username, email, phone }, (err, account) => {
    if (err) res.send(err)
    else if(account) res.json(account)
    else next()
  });
}

function hashPassword(req, res, next) {
  const { password } = req.body
  // pre-save: account.password = bcrypt.hashSync(account.password, 10);
  bcrypt.hash(password, 10, (err, hashed) => {
    if (err) return res.send(err);
    req.body.password = hashed;
    next();
  })
}

function signup (req, res, next) {
  const account = new Account(req.body);
  account.save(err => {
    if (err) res.send(err)
    const { password, ...others } = account
    res.json(others)
  });
}

/**
 * tip: onSubmit: needs `event.preventDefault`.
 * 3 cases: 1 error, 2 exist, 3 not exist.
 * (3) res: res.status(404)
 */
function checkAccountExist(req, res, next) {
  const {username} = req.body
  Account.findOne({ username }, (err, account) => {
    if (err) res.json({success: false, data: "Error"})
    else if (account) {
      console.log('???password???', account)
      req.account = account;
      next()
    }
    else res.status(404).send({success: false, data: "NOT FOUND"})
  });
}

function verifyPassword(req, res, next) {
  const {password} = req.body
  const passwordIsValid = bcrypt.compareSync(password, req.account.password);
  if (!passwordIsValid) {
    return res.status(401).json({ auth: false, accessToken: null, msg: "口令无效!" });
  }
  next()
}

// 注册的时候issue。
const signin = async (req, res, next) => {
  const {account} = req;
  if (account) {
    const { password, timestamp, ...userInfo } = account;
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
  Account.findById(req.params._id, (err, role) => {
    if(err) res.send(err)
    next()
  })
}

module.exports = {
  checkExisted,
  checkAccountExist,
  hashPassword,
  signup,
  verifyPassword,
  signin,
  signout,
  authenticate,
}
