const expect = require('chai').expect
const mongoose = require("mongoose");
const connectMongoDB = require('../../ms-auth/connect')
const Account = require('../../ms-auth/models/Account');

describe('Account', () => {
  before('connect', (done) => {
    new Promise(resolve => {
      connectMongoDB();
      setTimeout(() => resolve('connection'), 10)
    }).then(() => done())
  })

  after('connect', (done)=> {
    mongoose.connection.close();
    done()
  })

  let callback
  beforeEach(() => {
    callback = function(){}
  })
  it('account', () => {
    const account = Account.find({
      // username: /test/,
      // 'role.name': 'member',
      // 'category.name': 'local',
      // age: { $gt: 17, $lt: 66 },
      // phone: { $in: ['1347', '8221246'] }
    }).
    limit(10).
    sort({ username: -1 }).
    select({ username: 1, phone: 1 }).
    exec(callback);
console.log('---', account)
    expect([1, 2]).to.be.an('array').that.does.not.include(3);
  })
})

describe('Authentication', () => {
  it('authentication', () => {
    expect({a: 1}).to.not.have.property('b');
  })
})
