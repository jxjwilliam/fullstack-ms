const express = require('express')
const createError = require('http-errors')
// const jwt_decode = require('jwt-decode')

const middleware = {
  notFound: function (req, res, next) {
    const { originalUrl, baseUrl, url } = req
    console.error('😞 notFound Error 😞 ', { originalUrl, baseUrl, url, })
    next(createError(404))
  },
  print: function(req, res) {
    const { url, baseUrl, originalUrl, path, hostname } = req
    console.log('url, baseUrl, originalUrl: ', url, baseUrl, originalUrl, path, hostname)
  }
}

const getAccountInfo = (authToken) => {
  const token = {}; //jwt_decode(authToken)
  return {
    getRole: function (req, res, next) {
      return token.role
    },
    getCategory: function (req, res, next) {
      return token.category
    },
    getAccount: function (req, res, next) {
      const { username, email, phone } = token;
      return { username, email, phone }
    },
  }
}

function crud(Model) {
  return {
    // 需要重定向： /auth/account -> /auth/register
    create: (req, res, next) => {
      middleware.print(req, res)
      if (req.baseUrl === '/auth/account') {
        return res.redirect(307, '/auth/register')  // 302: FOUND
      }
      const newItem = new Model(req.body)
      return newItem.save(err => {
        if (err) next(err)
        else res.json(newItem)
      })
    },
    param: (req, res, next, id) => {
      Model.findById(id, (err, data) => {
        if (err) next(err);
        else if (data) {
          req.data = data;
          next();
        } else {
          return res.json({ message: 'No such record' });
          next(new Error('failed to load data'))
        }
      });
    },
    list: (req, res, next) => (
      Model.find(req.query, function (err, data) {
        if (err) next(err)
        else if (data) res.json(data)
        else next(new Error('failed to load user'))
      })
    ),
    read: (req, res, next) => (
      res.json(req.data)
    ),
    update: (req, res, next) => {
      Model.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
        (err, data) => {
          if (err) next(err)
          else res.json(data)
        })
    },
    delete: (req, res, next) => (
      Model.deleteOne({ _id: req.params._id }, err => {
        if (err) next(err);
        else res.json(req.data);
      })
    )
  }
}

function routing(MongoModel) {
  const router = express.Router()
  const Model = crud(MongoModel)

  router.param('id', Model.param)
  router.route('/')
    .get(Model.list)
    .post(Model.create)

  router.route('/:id')
    .get(Model.read)
    .put(Model.update)
    .delete(Model.delete);

  router.use(middleware.notFound)

  return router;
}

module.exports = {
  middleware,
  crud,
  routing,
};
