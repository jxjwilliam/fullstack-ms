### create-react-app

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```shell
$ npx create-react-app client
```

### storybook

---

### eslint, prettier, airbnb

- Tabsize: File > Preferences > Settings > `editor: tab size` => Tab Size: 2

```shell
$ yarn add -D eslint-config-airbnb eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier prettier
```

```shell
$ npx install-peerdeps --dev eslint-config-react-app
```

```shell
$ exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/karlhadwen/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
```

### emoji

🇨🇳

### react-router: 

(1) url vs path
- `path` - (string) The path pattern used to match. Useful for building nested `<Route>`s
- `url` - (string) The matched portion of the URL. Useful for building nested `<Link>`s

Consider the route `"/users/:userId"`:
- `match.path` would be "/users/:userId" 
- while `match.url` would have the :userId value filled in, e.g. `"users/5"`.

(2) match.url vs location.pathname
- `location.pathname` represents the root-relative url.
- `match.url` represents the matched portion of the URL, so maybe a `portion` of `location.pathname`.
