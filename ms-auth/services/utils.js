const express = require('express')

const middleware = {
  notFound: function (req, res) {
    return res.status(404).json({
      success: false,
      orginalUrl: req.originalUrl,
      baseUrl: req.baseUrl,
      url: req.url,
      error: 'NOT FOUND'
    })
  }
}

function routing (SpecificModel) {
  const router = express.Router()
  const Model = crud(SpecificModel)

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

function crud(Model) {
  return {
    create: (req, res, next) => {
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
          return res.json({message: 'No such record'});
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

module.exports = {
  crud,
  routing,
  middleware,
};
