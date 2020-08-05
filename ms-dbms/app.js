const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const http = require('http')

const config = require('./config/constants');
const controller = require('./controllers')
const route = require('./routes')
const uploadSController = require('./controllers/upload_single')
const uploadMController = require('./controllers/upload_multiple')

const app = express()

require('dotenv').config()

const port = process.env.PORT || 10001

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', (req, res) => {
  res.json('It works!')
})

app.use(['/api/customer_info', '/api/customer_info/'], route.customer_info);
app.use(['/api/organizations', '/api/organizations/'], route.organization);
app.use(['/api/flows', '/api/flows/'], route.flow);
app.use(['/api/departments', '/api/departments/'], route.department);
app.use(['/api/roles', '/api/roles/'], route.role);
app.use(['/api/auth', '/api/signup'], route.auth);

uploadSController(app);
uploadMController(app);

// app.use(controller.authenticate);

app.use(['/api/users', '/api/users/'], route.users);
app.use(['/api/status', '/api/status/'], route.status);
app.use(['/api/core-businesses', '/api/core-business/'], route.core_business);
app.use(['/api/suppliers', '/api/suppliers/'], route.supplier);
app.use(['/api/circulation', '/api/circulation/'], route.circulation);
app.use(['/api/financing', '/api/financing/'], route.financing);
app.use(['/api/issue', '/api/issue/'], route.issue);

app.use(controller.error404);

app.use(controller.error500);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

const server = http.createServer(app)

server.listen(port)

server.on('error', function (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  switch (error.code) {
    case 'EACCES':
      console.error(`🈚️ ${bind} 需要提升的特权`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`⛳️ ${bind} 已在使用中`)
      process.exit(1)
    default:
      throw error
  }
})

server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  console.log(`✈ ms-dbms 服务正运行在端口 ${bind}`)
})
