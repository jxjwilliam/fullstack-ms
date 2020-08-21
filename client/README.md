### create-react-app

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```shell
$ npx create-react-app client
```

### storybook

---

### eslint, prettier, airbnb

---

- Tabsize: File > Preferences > Settings > `editor: tab size` => Tab Size: 2
- npx install-peerdeps

````

[eslint-prettier-airbnb-react](https://github.com/jxjwilliam/eslint-prettier-airbnb-react)

```shell
$ exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/karlhadwen/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
````

### emoji

---

👋 👏 ✋ ✌️

### react-router: (1) url, path, pathname

---

(1) url vs path

- `path` - (string) The path pattern used to match. Useful for building nested `<Route>`s
- `url` - (string) The matched portion of the URL. Useful for building nested `<Link>`s

Consider the route `"/users/:userId"`:

- `match.path` would be "/users/:userId"
- while `match.url` would have the :userId value filled in, e.g. `"users/5"`.

(2) match.url vs location.pathname

- `location.pathname` represents the root-relative url.
- `match.url` represents the matched portion of the URL, so maybe a `portion` of `location.pathname`.

### react-router: (2) Link, NavLink

---

[3-party routing library](https://material-ui.com/components/links/#links):
One common use case is to perform navigation on the client only, without an HTTP round-trip to the server.
The `Link` component provides a property to handle this case: `component`. **Link component={}**

- React-Router-`Link`:
  - to
  - component
  - others

```text
const FancyLink = React.forwardRef((props, ref) => <a ref={ref}>💅 {props.children}</a>)
<Link to="/" component={FancyLink} />
```

- React-Router-`NavLink`:

  - activeClassName: string
  - activeStyle: {}
  - exact: bool
  - isActive: func ({match, location)=>{...})

- Material-ui-`Link`:

  - classes
  - color
  - component
  - variant
  - underline: none/hover, always

- solve `yarn build` -> `nginx/gateway host` issue

```jsx
<MuiLink component={Link} to="/">
  ...
</MuiLink>
```
