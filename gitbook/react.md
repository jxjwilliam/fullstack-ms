## React, Node

### 🍺 CSS，animation 库 @material-ui

### 🍺 前端路由 react-router-dom

### 🍺 前端存储 redux

### 🍺 代理 http-proxy-middleware

### 🍺 表单处理 FormData, File Upload 处理:

---

1. form submit with `Content-Type=application/json` + `JSON.stringify`, upload-file form use `Content-Type: multipart/form-data`

```javascript
  fetch('/api/account/signup', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state), //formData
  })
```

2. Server-side use `body-parser`:

```javascript
  // parse application/json
  app.use(bodyParser.json());
```

3. express uses `parseFormdata`:

```javascript
  router.post('/signup', (req, res, next) => {
    // this is the solution for 'formData'.
    parseFormdata(req, (err, data) => {
      console.log('formData, multipart/form-data: ', data.fields, data.parts);
    })
   });
```
 
### 🍺 表格处理 material-table

### 🍺 DBMS: MySQL + Sequelize

### 🍺 cross-platform document-oriented: MongoDB

### 🍺 jsexcel / grapecity + read-excel-file

### 🍺 文件上载 + Multer

### 🍺 TODO: docx

### 🍺 PDF + pdfkit

### 🍺 REST: request.js, node-fetch

isomorphic-fetch: 4,881,045
node-fetch: 16,710,148

### 🍺 邮件 nodemailer

### 🍺 日期时间：moment, date-fns

### 🍺 Create React App, npx express-generator

### 🍺 其它：lerna

### 🍺 Flutter - 谷歌跨平台移动应用开发框架

material-design + Dart

### 🍺 Ionic - 开源移动应用程序开发框架, webkit

### 🍺 eslint, prettier, airbnb, ary11

### 🍺 css in js

### 🍺 storybook

### 🍺 网络开发资源

The most popular and rank #1 React components for UI.

Facebook React + Google Material-design, the golden pair.

Flutter - Dart + Material-Design
