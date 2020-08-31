import { combineReducers } from 'redux'
import { signupReducer, authReducer } from './authReducer'
import { userReducer } from './accountReducer'
import { menu1Reducer, menu2Reducer } from './menuReducer'

export default combineReducers({
  auth: authReducer,
  register: signupReducer,
  users: userReducer,
  menu1: menu1Reducer,
  menu2: menu2Reducer,
})
