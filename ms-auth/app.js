const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./routes')

const app = express()

require('dotenv').config()
app.set('port', process.env.PORT)

const AUTHDB_URL = process.env.AUTHDB_URL;

mongoose.connect(
  AUTHDB_URL,
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  () => {
    console.info('连接成功 AUTHDB ->', AUTHDB_URL)
  }
)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }));

///////////////////////////////

app.get('/', (req, res) => {
  res.status(200).send(`MS-AUTH  ${req.baseUrl}, ${req.url}  works!`)
})

app.use('/auth', route.auth)
// TODO
app.use('/user', route.user)

///////////////////////////////

app
  .use(function (req, res, next) {
    next(createError(404))
  })
  .use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  })

module.exports = app
