#! ../node_modules/.bin/babel-node

const path = require('path');

const basename = path.resolve(path.join(__dirname, '..'));
const Photo = require(`${basename}/models/index`).Photo;

Photo.sync({force: true})
  .then(() => console.log("审核表创建/更新成功"))
  .catch(err => console.error(err));
