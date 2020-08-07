import {
  HEADERS,
  SIGNUP_SUCCESS, SIGNUP_FAIL,
  LOGIN_SUCCESS, LOGIN_FAIL,
  LOGOUT_SUCCESS, LOGOUT_FAIL,
} from '../ActionTypes'
import {defer} from '../../helpers/utils'

// 1. signup/register
const sigupSucc = payload => ({type: SIGNUP_SUCCESS, payload});

const signupFail = payload => ({type: SIGNUP_FAIL, payload})

export const signupAction = (body) => dispatch => {
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(body)
  };

  return fetch("/api/auth/signup", options)
    .then(res => res.json())
    .then(data => {
      if (data.account) {
        return dispatch(sigupSucc(data))
      }
      else {
        return dispatch(signupFail(data))
      }
    })
    .catch(e => console.error(e))
}


// 2. login
export const loginSucc = (payload, loginInfo) => ({type: LOGIN_SUCCESS, payload, loginInfo});

const loginFail = payload => ({type: LOGIN_FAIL, payload});

export const loginAction = (body) => dispatch => {
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(body)
  };

  return fetch("/api/auth/login", options)
    .then(res => res.json())
    .then(data => {
      if (data.auth && data.accessToken) {
        dispatch(loginSucc(data.accessToken, data.loginInfo));
      }
      else {
        dispatch(loginFail(data))
      }
    })
    .catch(e => console.error(e))
}


// 3. logout
const logoutSucc = () => ({type: LOGOUT_SUCCESS});

const logoutFail = payload => ({type: LOGOUT_FAIL, payload});

export const logoutAction = dispatch => {
  defer(1)
    .then(() => dispatch(logoutSucc()))
    .catch(e => dispatch(logoutFail()));
}
