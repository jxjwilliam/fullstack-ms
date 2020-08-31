import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../ActionTypes'

const initLogin = { loggedIn: false, token: null,}

export const authReducer = (state = initLogin, action) => {
  console.log('++++++', state, action)
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { token: action.payload, loggedIn: true }
    case LOGIN_FAIL:
      return { ...action.payload, loggedIn: false }
    case LOGOUT_SUCCESS:
      return { ...action.payload, loggedIn: false }
    case LOGOUT_FAIL:
      return { ...action.payload, loggedIn: true }
    default:
      return state
  }
}

export const signupReducer = (state = '', action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return action.payload
    case SIGNUP_FAIL:
      return action.payload
    default:
      return state
  }
}
