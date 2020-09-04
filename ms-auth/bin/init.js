#!/usr/bin/env node

const mongoose = require("mongoose");
const Account = require('../models/Account');
const demo_accounts = require('./accounts.json')
const connectMongoDB = require('../connect')

try {
    new Promise(resolve => {
      const asyncConnection = connectMongoDB()
      resolve(asyncConnection)
      // setTimeout(resolve, 10)
    }).then(async () => {
      for (const account of demo_accounts) {
        const new_account = new Account(account);
        await new_account.save((err, doc) => {
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
