import express from 'express'
import logger from 'morgan'
import http from 'http'
import createError from 'http-errors'
import cors from 'cors'
import indexRouter from './routes/index'
import resourceRouter from './routes/resource'

require('dotenv').config()

const port = process.env.PORT

const app = express()

app
  .use(logger('dev'))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/msconfig', resourceRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res) {
  res.status(err.status || 500).send('找不到对应的服务！')
})

const server = http.createServer(app)
server.listen(port, () => {
  console.log(`MS-DISCOVERY 服务正运行在端口 ${port}!`)
})
