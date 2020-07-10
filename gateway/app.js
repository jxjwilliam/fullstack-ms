const express = require('express');
const httpProxy = require('http-proxy');
const createError = require('http-errors');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const http = require('http');
const debug = require('debug')('gateway:app');

const app = express();

app.use(favicon(path.join(__dirname, '../client/public', 'favicon.ico')));
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();

const port = process.env.GATEWAY_PORT || 10000;
app.set('port', port);

// 测试接口
app.get('/', (req, res) => {
  res.status(200).send('Hello from BFF proxy server!');
});

const apiProxy = httpProxy.createProxyServer();

const MS1 = process.env.MS1 || 10001;
app.all('/api/*', (req, res) => {
  apiProxy.web(req, res, { target: MS1 });
});

app.use('/*', (req, res) => {
  const { url, params, query, body } = req;
  console.error('BFF-路由服务器 无效URL: ', url, params, query, body);
  res.sendStatus(404);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = http.createServer(app);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

server.on('error', onError);

server.listen(port, () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`BFF 代理服务正运行于端口 ${bind}`);
});
