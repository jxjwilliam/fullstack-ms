### create-react-app (CRA)

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
- All-In-One: [eslint-prettier-airbnb-react](https://github.com/jxjwilliam/eslint-prettier-airbnb-react)

```shell
$ exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/karlhadwen/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
```

fix eslint conflict issue:

```text
/client/node_modules/react-scripts/package.json:
  "eslint": "^7.7.0",
```

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

- Solve `yarn build` -> `nginx/gateway host` issue

```jsx
<MuiLink component={Link} to="/">
  ...
</MuiLink>
```

### @williamjiang/util

```shell script
$ yarn add @williamjiang/util
```

### redux

There are 2 places to save accessToken:

- sessionStorage
- redux

### redux-devtools-extension in browser

Only `process.env.NODE_ENV === 'development'` will activate

```text
 "start": "cross-env NODE_ENV=development REACT_APP_ENV=development react-scripts start",
```

### Test

- jest


### fix react-open-weather bug:

ReactWeather.js line 4202 `getNextDays`:

```javascript
tomorrow_formated = tomorrow.getFullYear() + "-" + ("0" + (tomorrow.getMonth() + 1)).slice(-2) + "-" + ("0"+(tomorrow.getDate())).slice(-2);
```

mv `react-open-weather` to `src/vendors`.

| client files       | client function-name | router   | rest-name      | server function-name | server files |
| ------------------ | -------------------- | -------- | -------------- | -------------------- | ------------ |
| sign/Signin.js     | SignIn               | /signup  | /auth/login    | ms-auth:signin       | auth.js      |
| sign/SigninSide.js | SignInSide           | /login   | /auth/login    | ms-auth:signin       | auth.js      |
| sign/Signout.js    | SignOut              | /signout | /auth/logout   | ms-auth:signout      | auth.js      |
| sign/Signup.js     | SignUp               | /signup  | /auth/register | ms-auth:signup       | auth.js      |

### fetch response

in `Login` function:

```javascript
  onSubmit(event) {
    event.preventDefault();

    const response = await fetch('/auth/login', formdata)
    if (response.ok) {
      location.href='/';
    } else {
      notify('Failed to login')
    }
  }
```
