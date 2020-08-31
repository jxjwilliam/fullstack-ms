const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Account = require('../models/Account');

require('dotenv').config();
const SECRET = process.env.SECRET;

// email + phone => unique
// username => unique
function isNotExist(req, res, next) {
  const {username, email, phone} = req.body
  Account.findOne({ username, email, phone }, (err, account) => {
    if (err) res.json({success: false, data: "Error"})
    else if (account) res.json({success: false, data: "Existed"})
    else next()
  });
}

function hashPassword(req, res, next) {
  const { password } = req.body
  // pre-save: account.password = bcrypt.hashSync(account.password, 10);
  bcrypt.hash(password, 10, (err, hashed) => {
    if (err) return res.json({success: false, data: "Bcrypt Hash Error"})
    req.body.password = hashed;
    next();
  })
}

function register (req, res, next) {
  const { role, category, ...others } = req.body
  const account = new Account({
    ...others,
    role: {name: role, desc: 'role'},
    category: {name: category, desc: 'category'}
  });
  account.save(err => {
    if (err) return res.json({success: false, data: "DB Error"})
    const { password, ...info } = account
    return res.json(info)
  });
}

/**
 * tip: onSubmit: needs `event.preventDefault`.
 * 3 cases: 1 error, 2 exist, 3 not exist.
 * (3) res: res.status(404)
 * Document.prototype.toObject: https://mongoosejs.com/docs/api.html#document_Document-toObject
 */
function isExist(req, res, next) {
  const {username} = req.body
  Account.findOne({ username }, (err, account) => {
    if (err) res.json({success: false, data: "Error"})
    else if (account) {
      req.account = account.toObject();
      next()
    }
    else res.status(404).send({success: false, data: "NOT FOUND"})
  });
}

function verifyPassword(req, res, next) {
  const {password} = req.body
  const passwordIsValid = bcrypt.compareSync(password, req.account.password);
  if (!passwordIsValid) {
    return res.status(401).json({ auth: false, token: null, msg: "口令无效!" });
  }
  next()
}

async function issueToken(req, res, next) {
  const {account} = req;
  const { password, timestamp, __v, isActive, desc, role, category, ...others } = account;
  const tokenInfo = { ...others, role: role.name, category: category.name }
  req.token = await jwt.sign(tokenInfo, SECRET, { expiresIn: 86400 }); // expires in 24 hours
  next()
}

// 注册的时候issue。
function login (req, res, next) {
  const {token} = req
  if (token) {
    return res.status(200).json({token});
  } else {
    next(new Error('account error'))
  }
}

function signout (req, res) {
  console.log('TODO signout')
  return res.status(200).json({ msg: '退出' });
}

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

module.exports = {
  isNotExist,
  hashPassword,
  register,
  isExist,
  verifyPassword,
  issueToken,
  login,
  signout,
  authenticate,
}
