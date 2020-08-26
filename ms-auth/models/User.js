const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  is_from: {
    type: String,
    default: "ms-auth" //可能从oAuth2 来。
  },
  desc: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
});

UserSchema.pre('save', function (next) {
  console.log('!!!!', this);
  const user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

UserSchema.statics.authenticate = function (username, password, callback) {
  console.log("如何调用？什么时候执行 ？");
  User.findOne({ username })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        let err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
};

module.exports = mongoose.model('User', UserSchema);
