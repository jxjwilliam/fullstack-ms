const express = require('express');
const multer = require('multer');
const fs = require('fs');
const Upload = require('../models').Single;

const router = express.Router();

const uploadTempDir = multer({dest: '/tmp/'});

module.exports = (uploadDir) => {

  router.get('/', (req, res, next) => {
    Upload.findAll({raw: true})
      .then(data => res.json(data))
      .catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Upload.findByPk(id, {raw: true})
      .then(data => res.json(data))
      .catch(next);
  });

  router.get('/name/:name', (req, res, next) => {
    Upload.findAll({
      where: {name: req.params.name},
      include: [{all: true}]
    }, {raw: true})
      .then(data => res.json(data))
      .catch(next);
  });

  router.post('/', uploadTempDir.single('image'), (req, res) => {
    const file = uploadDir + req.file.originalname;
    fs.rename(req.file.path, file, function (err) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      else {
        const fstat = req.file;
        Upload.create({
          name: fstat.originalname,
          file_path: file,
          field_name: fstat.fieldname,
          size: fstat.size,
          type: fstat.mimetype,
        }).then(r => {
          res.send(r.get({plain: true}));
        });
      }
    });
  })

  return router
};
