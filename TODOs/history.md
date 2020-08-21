# Q/A

## eslint 版本冲突

```shell
cd basic
$ npm ls eslint
$ npm uninstall ls eslint
$ yarn install
```

I did, it does not work.

- 更新`client/node_modules/react-scripts/package.json`里面 eslint 的版本。
  I did, it works.
