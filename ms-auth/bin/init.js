#!/usr/bin/env node

const mongoose = require("mongoose");
const User = require('../models/User');
const demousers = require('./demousers.json')

try {
  mongoose.connect(
    'mongodb://localhost:27017/ms-auth',
    {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => console.log('連接成功：'))
    .then(async () => {
      for (const user of demousers) {
        const newuser = new User(user);
        await newuser.save((err, doc) => {
          if (err) console.log(err);
          else console.log(doc);
        });
      }
    })
}
catch (e) {
  throw new Error(e)
} finally {
  setTimeout(() => {
    mongoose.connection.close();
  }, 2000)
}
