const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const connectDb = require('./connect')

const app = express()

require('dotenv').config()
app.set('port', process.env.PORT)

connectDb({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
})

app
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }))

///////////////////////////////

app.get('/', (req, res) => {
  res.status(200).send(`MS-DOC ${req.baseUrl}, ${req.url} works!`)
})

app.get('/api/doc', (req, res) => {
  res.status(200).send(`MS-DOC ${req.baseUrl}, ${req.url} works!`)
})

app
  .use(function (req, res, next) {
    next(createError(404))
  })
  .use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  })

module.exports = app
