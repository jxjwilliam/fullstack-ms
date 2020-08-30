const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require('validator')
const Role = require('./Role')
const { RoleSchema, CategorySchema } = require('./common')

const AccountSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'invalid email']
  },
  phone: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone, 'invalid phone']
  },
  password: {
    type: String,
    required: true,
    // select: false, //~: is set, not select when query
  },
  role: RoleSchema,
  // role: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Role',
  //   required: true,
  // },
  category: CategorySchema,
  desc: {
    type: String,
    default: '管理',
  },
  isActive: {
    type: Boolean,
    default: true
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
});

AccountSchema.index({ email: 1, phone: 1 }, { unique: true })

AccountSchema.pre('save', function (next) {
  const account = this;
  bcrypt.hash(account.password, 10, function (err, hash) {
    if (err) return next(err);
    account.password = hash;
    next();
  })
});

AccountSchema.post('save', function(doc) {
  // TODO
})

AccountSchema.statics.authenticate = function (username, password, callback) {
  console.log("如何调用？什么时候执行 ？");
  Account.findOne({ name })
    .exec(function (err, user) {
      if (err) return callback(err)
      else if (!user) {
        let err = new Error('Account not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) return callback(null, user);
        else return callback();
      })
    });
};

module.exports = mongoose.model('Account', AccountSchema, 'accounts');
