import jwt_decode from 'jwt-decode'
import { HEADERS, TOKEN } from '../constants'

const isEmpty = prop => {
  return prop === null || prop === undefined ||
    (prop.hasOwnProperty("length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
}

const fetching = (url, opts = {}) => {
  let body;
  const headers = { ...HEADERS, ...opts.headers }
  const method = opts.method || 'GET';
  if (opts.body) body = opts.body;

  return fetch(url, { method, headers, body }).then(res => res.json()).catch(e => alert(e));
}

const defer = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms));

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const loginInfos = () => {
  const token = sessionStorage.getItem(TOKEN)
  if (token) return jwt_decode(token)
  return {}
}

export {
  isEmpty,
  fetching,
  defer,
  capitalize,
  loginInfos
}
