const createError = require('http-errors')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')

const config = require('./config/constants');
const controller = require('./controllers')
const route = require('./routes')
const uploadSController = require('./controllers/upload_single')
const uploadMController = require('./controllers/upload_multiple')

const app = express()

require('dotenv').config()
app.set('port', process.env.PORT)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }));

///////////////////////////////

app.get('/', (req, res) => {
  res.status(200).send(`MS-DBMS ${req.baseUrl}, ${req.url} works!`)
})

app.get('/api/dbms', (req, res) => {
  res.status(200).send(`MS-DBMS ${req.baseUrl}, ${req.url} works!`)
})

app.use(['/api/dbms/customer_info', '/api/dbms/customer_info/'], route.customer_info);
app.use(['/api/dbms/organizations', '/api/dbms/organizations/'], route.organization);
app.use(['/api/dbms/flows', '/api/dbms/flows/'], route.flow);
app.use(['/api/dbms/departments', '/api/dbms/departments/'], route.department);
app.use(['/api/dbms/roles', '/api/dbms/roles/'], route.role);
app.use(['/api/dbms/auth', '/api/dbms/signup'], route.auth);

uploadSController(app);
uploadMController(app);

// app.use(controller.authenticate);

app.use(['/api/dbms/users', '/api/dbms/users/'], route.users);
app.use(['/api/dbms/status', '/api/dbms/status/'], route.status);
app.use(['/api/dbms/core-businesses', '/api/dbms/core-business/'], route.core_business);
app.use(['/api/dbms/suppliers', '/api/dbms/suppliers/'], route.supplier);
app.use(['/api/dbms/circulation', '/api/dbms/circulation/'], route.circulation);
app.use(['/api/dbms/financing', '/api/dbms/financing/'], route.financing);
app.use(['/api/dbms/issue', '/api/dbms/issue/'], route.issue);

app.use(controller.error404);

app.use(controller.error500);

// catch 404 and forward to error handler
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
