const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Upload = require('../models').Upload;

module.exports = (app) => {

  const uploadDir = app.get('ms_dir') + '/uploads/';

  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, uploadDir)
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname)
    }
  });

  const uploads = multer({storage});

  app.get('/api/uploads', (req, res, next) => {
    Upload.findAll({raw: true})
      .then(data => res.json(data))
      .catch(next);
  });

  app.get('/api/uploads/:id', (req, res, next) => {
    const id = req.params.id;
    Upload.findByPk(id, {raw: true})
      .then(data => res.json(data))
      .catch(next);
  });

  // 一次上载的文件查询。
  app.get('/api/uploads/name/:name', (req, res, next) => {
    Upload.findAll({
      where: {name: req.params.name},
      include: [{all: true}]
    }, {raw: true})
      .then(data => res.json(data))
      .catch(next);
  });

  app.post('/api/uploads', uploads.array('images', 4), (req, res, next) => {

    const files = req.files;
    console.log('~~~~~~~', files);

    if (!files) {
      const error = new Error('请选择上传文件');
      error.httpStatusCode = 400;
      return next(error);
    }

    res.send(files);

    //   files.forEach(file => {
    //     const fstat = {
    //       name: file.originalname,
    //       file_path: uploadDir + '/uloads/' + file.originalname,
    //       field_name: file.fieldname,
    //       size: file.size,
    //       type: file.mimetype,
    //     };
    //     Upload.create(fstat).then(r => console.log(fstat));
    //   });
  });
};