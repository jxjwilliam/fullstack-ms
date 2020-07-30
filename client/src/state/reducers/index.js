import {combineReducers} from 'redux'
import {signupReducer, loginReducer} from './authReducer'
import {userReducer} from './accountReducer'
import {menu1Reducer, menu2Reducer} from './menuReducer'

export default combineReducers({
  auth: loginReducer,
  users: userReducer,
  register: signupReducer,
  menu1: menu1Reducer,
  menu2: menu2Reducer,
})