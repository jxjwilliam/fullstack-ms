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

const defer = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * 1. local 加token，有content-type和accept
 * 2. 上传文件，加token，但没有content-type
 *  in case encType="multipart/form-data", remove "Content-Type": "application/json; charset=UTF-8",
 * 3. 代理第三方服务不加，但有content-type和accept
 * 4. 选项 isFileOrProxy: 1 文件; 2 proxy; undefined 普通fetch，等于fetchingOrig+token
 */
const fetching = (url, opts = {}, isFileOrProxy) => {
  let body
  let headers = {}

  // 代理第三方服务，比如Java App，不需要验证
  if (isFileOrProxy === 2) {
    headers = { ...HEADERS, ...opts.headers }
  } else {
    const authToken = sessionStorage.getItem(TOKEN)
    if (!authToken) {
      console.error('权限认证失败，请先注册')
      return null // TODO: Redirect
    }

    // 文件上传(isFileOrProxy===1), 不要content-type
    headers = isFileOrProxy === 1 ? {Accept: HEADERS.Accept} : HEADERS
    headers = { ...headers, ...opts.headers, 'authorization': `Bearer ${authToken}`}
  }

  const method = opts.method || 'GET'
  if (opts.body) body = opts.body

  return fetchingOrig(url, { method, headers, body })
}

const fetchingOrig = (url, opts = {}) => {
  return fetch(url, opts)
    .then((res) => {
      if (res.status && /^4\d{2}/.test(res.status)) { // 401,403,
        expiredReload()
      }
      else return res.json()
    })
    .catch((e) => console.error('操作失败: ', e.message))
}

const getToken = () => {
  const authToken = sessionStorage.getItem(TOKEN)
  return authToken ? jwt_decode(authToken) : {}
}

const checkLogin = (token) => {
  const authToken = token || sessionStorage.getItem(TOKEN)
  if (isEmpty(authToken)) return <Redirect to={DEFAULT_LOGIN_PAGE}/>
  return null
}

function expiredReload () {
  sessionStorage.removeItem(TOKEN)
  window.location.href = DEFAULT_LOGIN_PAGE
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
function isJson(str) {
  try {
    JSON.parse(str)
  } catch(e) {
    return false
  }
  return true
}
function showGroup (content, title='') {
  console.group(`👋 👏 ${title}`)
  console.log(content)
  console.groupEnd()
}

export {
  isEmpty, defer,
  fetching, fetchingOrig,
  getToken, checkLogin,
  capitalize, isJson, showGroup,
}
