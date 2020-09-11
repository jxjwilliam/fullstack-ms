#!/usr/bin/env node

const jwt = require("jsonwebtoken");
const expressJwt = require('express-jwt')

const TOKEN_SECRET = require('crypto').randomBytes(64).toString('hex')

function signToken(tokenInfo) {
  const token = jwt.sign(tokenInfo, TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '30m' })
  // res.json({token})
}

// authenticateToken is a express-middleware.
function authenticate(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

function verifyToken(token) {
  var decoded = jwt.verify(token, TOKEN_SECRET)
  console.log(decoded.username)
}

// a convenient way, same button better than `verfyToken`.
function verifyExpressJwt(token) {
  expressJwt({
    secret: TOKEN_SECRET, algorithms: ['HS256'],
    getToken: (req) => {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    }
  }, (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token');
    }
  })
}

// app.use(verifyExpressJwt)
