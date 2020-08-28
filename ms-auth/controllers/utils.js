const mongoose = require('mongoose')

const response = {
  resError: function(res, err, statusCode) {
    return res.status(statusCode).json(err.message)
  },
  resSuccess: function(res, data, statusCode) {
    return res.status(statusCode).json(data);
  },
  resData: function (res, err) {
    return (err, data) => {
      if(err) return this.resError(res, err)
      return this.resSuccess(data)
    }
  }
}

const crud = {
  create: function(Model, options) {
    return (req, res) => {
      const newItem = new Model(req.body)
      return newItem.save()

    }
  },
  read: function(Model, options) {
    return (req, res) => (
      Model.find(...req.query, )
    )
  },
  update: function(Model, options) {
    return (req, res) => {
      Model.findByIdAndUpdate(
        req.params._id,
        req.body,
        {new: true},
      ).populate()
    }
  },
  delete: function(Model) {
    return (req, res) => (
      Model.deleteOne({_id: req.params._id})
    )
  },
}

const middleware = {
  notFound: function (req, res) {
    return response.resError(res, 404)
  }
}

module.exports = {
  crud,
  middleware,
  response,
};
