### bcrypt vs bcryptjs

`bcrypt` is a native (C++) module, thus much faster than `bcryptjs` which is a pure js module.
`bcryptjs` is plain js, hence works everywhere, even browsers. `bcrypt` runs only on NodeJS, Node-WebKit or Electron.

### 📑 PDFKit

---

`PDFKit`是采用`NodeJS`开发的一款 PDF 文档生成库，它使用一个“HTML5 canvas-like API”来创建矢量图形和字体嵌入，并且支持许多标准的`PDF`功能，如文件的安全性、表的创建、文本换行、项目符号、高亮提示、注释等`PDF`功能。

注意，`PDFKit`是一款`PDF`生成工具，而不是一个文档转换系统。如果你想对现有的`PDF`文档进行操作，你可以使用另一个 NodeJS 项目 - `Scissors`

### package.json Options

- localenv, .env.local
- method-overwride
- express.urlencoded
- faker

### API

---

| 表      | CRUD | API        | 说明             |
| ------- | ---- | ---------- | ---------------- |
| Account | GET  | /api/users | 取所有`用户信息` |

### Issues

1. .babelrc

```text
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-decorators"
  ]
```
