# Micro-service FullStack Framework

## client

---

```shell
$ npx create-react-app client
```

## 后台

---

```shell
$ npx express-generator ms-app
```

## ms-dbms

---

```shell
$ yarn add sequelize-cli
$ npx sequelize init
```

### 包管理

---

- eslint
- prettier, airbnb
- husky
- lint-staged
- lerna
- concurrently
- cross-env
- pm2, nodemon

- `.huskyrc`在`git pre-commit`的钩子调起 `lint-staged`
- `lint-staged` 取得所有被提交的文件依次执行写好的任务(ESLint 和 Prettier), 如果有错误(没通过 ESlint 检查)则停止任务，等待下次`commit`，同时打印错误信息

### License

---

```text
$ npx license (MIT)
```

### Micro-services List

---

| microservice | function | note                              | example |
| ------------ | -------- | --------------------------------- | ------- |
| gateway      |          | BFF                               |
| ms-auth      |          | JWT authentication, authorization |
| ms-dbms      |          | MySQL + Sequelize                 |
| ms-mongo     |          | MongoDB + Mongoose                |
| ms-discovery |          |                                   |
| ms-graphql   |          | Apollo GraphQL                    |
| ms-gitbook   |          | gatsby + gitbook                  |

### lerna

---

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
