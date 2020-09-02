
`msconfig.json` is the place to define all the `ms-` global varibles.

### 📑 使用指南
---
```text
    http://localhost:3800/msconfig/
    http://localhost:3800/msconfig/localhost
    http://localhost:3800/msconfig/localhost/discovery
    http://localhost:3800/msconfig/localhost/ms-not-exists
```


### 📑 微服务初始化
---
将 `msconfig` 的缺省值写入 `.env` 文件。

```text
bin/node bootstrap discovery
bin/node bootstrap jwt
bin/node bootstrap features
bin/node bootstrap mongo
```

### 📑 TODO Redis, SQLite3, CDN ?
---
- in-memory database