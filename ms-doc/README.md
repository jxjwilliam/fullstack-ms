
### bcrypt vs bcryptjs

`bcrypt` is a native (C++) module, thus much faster than `bcryptjs` which is a pure js module. 
`bcryptjs` is plain js, hence works everywhere, even browsers. `bcrypt` runs only on NodeJS, Node-WebKit or Electron.
