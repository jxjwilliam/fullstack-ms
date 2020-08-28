const expect = require('chai').expect
const mongoose = require("mongoose");
const connectMongoDB = require('./connect')

describe('connect test', () => {
  before('connect', (done) => {
    new Promise(resolve => {
      connectMongoDB();
      setTimeout(resolve, 10)
    }).then(() => done())
  })

  after('connect', (done)=> {
    mongoose.connection.close();
    done()
  })

  it('should connected', () => {
    expect(1+1).to.be.equal(2)
  })
})
