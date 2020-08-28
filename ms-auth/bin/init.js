#!/usr/bin/env node

const mongoose = require("mongoose");
const User = require('../models/User');
const demousers = require('./demousers.json')
const connectMongoDB = require('../connect')

const defer = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

try {
    new Promise(resolve => {
      connectMongoDB()
      setTimeout(resolve, 10)
    }).then(async () => {
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
  }, 4000)
}
