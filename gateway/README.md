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
