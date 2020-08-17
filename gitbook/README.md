# Introduction

```shell
$ gitbook init
$ gitbook build
$ gitbook serve
$ open localhost:4000
```

## 集成

---

如果要集成进入 App：

```shell
$ gitbook build
$ mv _book ../client/public/gitbook (or ln -s)
```

创建一个组件，内容：

```javascript
<Link to="_book">gitbook</Link>
```
