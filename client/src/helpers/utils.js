import React from 'react'
import { Redirect } from 'react-router-dom'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { DEFAULT_LOGIN_PAGE, HEADERS, TOKEN } from '../constants'
import fetching from "./fetching";

const isEmpty = (prop) =>
  prop === null ||
  prop === undefined ||
  // eslint-disable-next-line no-prototype-builtins
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)

const defer = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

const getToken = () => {
  const authToken = sessionStorage.getItem(TOKEN)
  return authToken ? jwt_decode(authToken) : {}
}

const checkLogin = (token) => {
  const authToken = token || sessionStorage.getItem(TOKEN)
  if (isEmpty(authToken)) return <Redirect to={DEFAULT_LOGIN_PAGE} />
  return null
}

// 401, 403, no token etc...
function pageReload() {
  setTimeout(() => {
    sessionStorage.removeItem(TOKEN)
    window.location.href = DEFAULT_LOGIN_PAGE
  }, 1000)
}


function DataPrint({ data }) {
  return (
    <pre style={{ textAlign: 'initial' }}>
      <code>
        {JSON.stringify(data, null, 4)}
      </code>
    </pre>
  );
}

// ({...partial, [key]: obj[key]})
function extractObj(ary = [], obj = {}) {
  return ary.reduce((partial, key) => {
    if (obj[key]) partial[key] = obj[key]
    return partial
  }, {})
}

export {
  isEmpty, defer,
  fetching, extractObj,
  getToken, checkLogin,
  pageReload, DataPrint
}
