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

### request.js (Deprecated)

`Request` is going into maintenance mode, this is what you need to know.

Alternatives to Request:

- Got
- Axios
- Node Fetch
- Superagent


### Nginx delegate Node-app

This *NOT* work.
```text
  location /news-api-react/ {
    alias "C:/Users/willi/MY_TOOL/nginx-1.18.0/news_api_react/";
    index  index.html index.htm;
  }
```
This *WORK*:
```text
location /  {
    proxy_pass    http://127.0.0.1:5000/;
    try_files $uri $uri/ =404;
}
```
