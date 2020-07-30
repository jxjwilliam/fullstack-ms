const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = async (dbOptions = {}) => {
  const {
    host = '192.168.99.100',
    port = '27017',
    database = 'basic-doc',
  } = dbOptions

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }

  const uri = `mongodb://${host}:${port}/${database}`

  try {
    await mongoose.connect(uri, options)
    console.log('连接 Mongo 数据库 -> ', uri)
  } catch (err) {
    console.error('连接 Mongo 数据库失败: ', String(err))
  }
}
