## 产品环境 production

```shell
$ cd client
$ yarn build && mv build ../gateway
$ cd gateway
$ npx serve -s build
$ open http://localhost:5000
```

## gateway 代理

```shell
$ cd basic
$ yarn run-prod
$ open http：//localhost:10000
```

### request.js


`Request` is going into maintenance mode, this is what you need to know.

Alternatives to Request:

- Got
- Axios
- Node Fetch
- Superagent


### API

---

| 表   | CRUD | API        | 说明             |
| ---- | ---- | ---------- | ---------------- |
| User | GET  | /api/users | 取所有`用户信息` |
