const express = require('express')
const createError = require('http-errors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const route = require('./services')
const connectMongoDB = require('./connect')
const { PORT } = require('./constants')

connectMongoDB()

const app = express()
app.set('port', PORT)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }));

///////////////////////////////

// http://localhost:8066
app.get('/', (req, res) => {
  res.status(200).send(`MS-AUTH originalUrl=${req.originalUrl}, baseUrl=${req.baseUrl}, url=${req.url}  works!`)
})

// http://localhost/auth/*
app.use('/auth', route)

/**
 * when 404, createError will res.send and exit, not to next middleware line 40.
 */
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  return res.status(err.status || 500).json({'error': 'Not found'});
})

module.exports = app
