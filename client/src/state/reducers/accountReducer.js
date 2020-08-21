import {
  ADD_USER,
  GET_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from '../ActionTypes'

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload
    case GET_USER:
      return action.payload
    case GET_USERS:
      return action.payload
    case UPDATE_USER:
      return action.payload
    case DELETE_USER:
      return action.payload
    default:
      return state
  }
}
