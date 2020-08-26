const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET } = require('../etc/config');
const User = require('../models/User');

const signup = (req, res, next) => {
  const user = new User(req.body);
  // pre-save: user.password = bcrypt.hashSync(user.password, 10);
  user.save(err => {
    if (err) {
      console.log(err);
      next(err);
    }
    else res.json(user);
  });
};

/**
 * 1. 查询该用户存在否？如果存在就提示并退出。
 * 2. 比较口令，如果口令不对，就提示并退出。
 * 3. 生成jwt-token，并设置有效期（24小时或10分钟?)
 * 4. 返回token
 */
const handleErrors = (req, res, err) => {
  return res.json({
    success: false,
    message: err,
    data: null
  })
};

// 注册的时候issue。
const signin = async (req, res, next) => {
  const { username, password } = req.body;
  let user;
  try {
    user = await User.findOne({ username });
  } catch (err) {
    handleErrors(req, res, err);
  }

  if (!user || Object.keys(user).length === 0) {
    return res.status(404).json({ msg: '该用户不存在' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ auth: false, accessToken: null, msg: "口令无效!" });
  }

  if (user) {
    const { password, timestamp, ...userInfo } = user;
    const token = jwt.sign(userInfo, SECRET, { expiresIn: 86400 }); // expires in 24 hours

    return res.status(200).json({ auth: true, accessToken: token });
  }
};

const signout = (req, res, next) => {
  return res.status(200).json({ msg: '退出' });
};

// 验证
const authenticate = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.body.token || req.params["token"];

  if (token) {
    jwt.verify(token, SECRET, (error, decoded) => {
      if (error) {
        console.log(error);
        return res.json({ msg: "auth认证失败。" });
      }
      else {
        req.decoded = decoded;
        console.log('auth认证---> ', req.decoded);
        next();
      }
    });
  } else {
    return res.status(403).json({ msg: "auth token不存在。" });
  }
};

module.exports = {
  authenticate,
  signup,
  signin,
  signout,
};