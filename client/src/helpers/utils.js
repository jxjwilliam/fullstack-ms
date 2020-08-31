import React from 'react'
import { Redirect } from 'react-router-dom'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import {DEFAULT_LOGIN_PAGE, HEADERS, TOKEN} from '../constants'

const isEmpty = (prop) =>
  prop === null ||
  prop === undefined ||
  // eslint-disable-next-line no-prototype-builtins
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)

/**
 * 1. local 加token，有content-type和accept
 * 2. dzqz 不加，但有content-type和accept
 * 3. 上传文件，加token，但没有content-type
 *  in case encType="multipart/form-data", remove "Content-Type": "application/json; charset=UTF-8",
 */
const fetching1 = (url, opts = {}, isFileOrProxy) => {
  let body
  let headers = {}

  // 电子签章
  if (isFileOrProxy === 2) {
    headers = {
      ...HEADERS,
      ...opts.headers,
    }
  } else {
    const token = sessionStorage.getItem(TOKEN)
    if (!token) {
      console.error('权限认证失败，请先注册')
      return null // TODO: Redirect
    }

    // 文件上传, 不要content-type
    if (isFileOrProxy === 1) {
      headers = {
        Accept: HEADERS.Accept,
        'x-access-token': token,
        ...opts.headers,
      }
    } else {
      headers = {
        ...HEADERS,
        'x-access-token': token,
        ...opts.headers,
      }
    }
  }

  const method = opts.method || 'GET'
  if (opts.body) body = opts.body

  return fetch(url, { method, headers, body })
    .then((res) => res.json())
    .catch((e) => console.error('操作失败: ', e.message))
}

const fetching = (url, opts = {}) => {
  let body
  const headers = { ...HEADERS, ...opts.headers }
  const method = opts.method || 'GET'
  if (opts.body) body = opts.body

  return fetch(url, { method, headers, body })
    .then((res) => res.json())
    .catch((e) => alert(e))
}

const defer = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

const getToken = () => {
  const authToken = sessionStorage.getItem(TOKEN)
  if (authToken) {
    const token = jwt_decode(authToken)
    // console.group('👋 👏 authToken')
    // console.log(token)
    // console.groupEnd()
    return token
  }
  return {}
}

const checkLogin = (token) => {
  const authToken = token || sessionStorage.getItem(TOKEN)
  if (isEmpty(authToken)) {
    console.log(`TODO: should redirect to ${DEFAULT_LOGIN_PAGE}`)
    return <Redirect to={DEFAULT_LOGIN_PAGE}/>
  }
  return false
}

const getTokenAccount = () => {
  const token = getToken()
  return token.account || ''
}

export {
  isEmpty, fetching, defer, capitalize,
  getToken, checkLogin, getTokenAccount
}
