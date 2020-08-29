const expect = require('chai').expect
const Account = require('../models/Account');

describe('Account', () => {
  let callback
  beforeEach(() => {
    callback = function(){}
  })
  it('user', () => {
    // With a JSON doc
    Account.find({
      occupation: /host/,
      'name.last': 'Ghost',
      age: { $gt: 17, $lt: 66 },
      likes: { $in: ['vaporizing', 'talking'] }
    }).
    limit(10).
    sort({ occupation: -1 }).
    select({ name: 1, occupation: 1 }).
    exec(callback);

    expect([1, 2]).to.be.an('array').that.does.not.include(3);
  })
})

describe('Authentication', () => {
  it('authentication', () => {
    expect({a: 1}).to.not.have.property('b');
  })
})
