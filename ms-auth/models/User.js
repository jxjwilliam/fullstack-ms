const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require('validator')
const Role = require('./Role')
const { RoleSchema, CategorySchema } = require('./common')

const UserSchema = new Schema({
  name: {
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
    select: false
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

UserSchema.index({ email: 1, phone: 1 }, { unique: true })

UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  })
});

UserSchema.post('save', function(doc) {
  // TODO
})

UserSchema.statics.authenticate = function (username, password, callback) {
  console.log("如何调用？什么时候执行 ？");
  User.findOne({ name })
    .exec(function (err, user) {
      if (err) return callback(err)
      else if (!user) {
        let err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) return callback(null, user);
        else return callback();
      })
    });
};

module.exports = mongoose.model('User', UserSchema, 'users');
