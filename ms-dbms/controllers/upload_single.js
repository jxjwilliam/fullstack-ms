const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Upload = require('../models').Upload;

const uploadTempDir = multer({dest: '/tmp/'});

module.exports = (app) => {

  const uploadDir = app.get('ms_dir') + '/uploads/';

  app.get('/api/upload', (req, res, next) => {
    Upload.findAll({raw: true})
      .then(data => res.json(data))
      .catch(next);
  });

  app.get('/api/upload/:id', (req, res, next) => {
    const id = req.params.id;
    Upload.findByPk(id, {raw: true})
      .then(data => res.json(data))
      .catch(next);
  });

  app.get('/api/upload/name/:name', (req, res, next) => {
    Upload.findAll({
      where: {name: req.params.name},
      include: [{all: true}]
    }, {raw: true})
      .then(data => res.json(data))
      .catch(next);
  });

  app.post('/api/upload', uploadTempDir.single('image'), (req, res) => {
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
};