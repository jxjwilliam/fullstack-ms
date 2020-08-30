const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const route = require('./services')
const connectMongoDB = require('./connect')
const { PORT, SECRET } = require('./constants')

connectMongoDB()

const app = express()
app.set('port', PORT)
app.set('Secret', SECRET)

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

///////////////////////////////
// TODO: http://localhost:8066/: GET /favicon.ico 404 7.955 ms - 2040

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
