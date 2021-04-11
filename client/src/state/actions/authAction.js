import { HEADERS, TOKEN } from '../../constants'
import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from '../ActionTypes'

// 1. signup/register
const sigupSucc = payload => ({ type: SIGNUP_SUCCESS, payload })

const signupFail = payload => ({ type: SIGNUP_FAIL, payload })

export const signupAction = body => dispatch => {
  const options = {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  }

  return fetch('/auth/register', options)
    .then(res => res.json())
    .then(data => {
      if (data.account) dispatch(sigupSucc(data))
      else dispatch(signupFail(data))
    })
    .catch(e => console.error(e))
}

// 2. login
const loginSucc = payload => ({ type: LOGIN_SUCCESS, payload })

const loginFail = payload => ({ type: LOGIN_FAIL, payload })

export const loginAction = body => dispatch => {
  const options = {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  }

  return fetch('/auth/login', options)
    .then(res => {
      // 404 res.sendStatus(404)
      if (!res.ok) {
        console.log('TODO: notification!', res)
        return { data: res.statusText }
      }
      return res.json()
    })
    .then(data => {
      if (data.token) dispatch(loginSucc(data.token))
      else dispatch(loginFail(data))
    })
    .catch(e => console.error(e))
}

// 3. logout
const logoutSucc = () => ({ type: LOGOUT_SUCCESS })

const logoutFail = payload => ({ type: LOGOUT_FAIL, payload })

export const logoutAction = () => dispatch => {
  const authToken = sessionStorage.getItem(TOKEN)
  const opts = {
    headers: { authorization: `Bearer ${authToken}` },
  }
  return fetch('/auth/logout', opts)
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(() => dispatch(logoutSucc()))
    .catch(() => dispatch(logoutFail()))
}
