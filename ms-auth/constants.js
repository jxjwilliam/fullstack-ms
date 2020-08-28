// convenient for test.

const MongoOptions = {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}

require('dotenv').config()

module.exports = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  AUTHDB_URL: process.env.AUTHDB_URL || 'mongodb://localhost:27017/ms-auth',
  MongoOptions
}
