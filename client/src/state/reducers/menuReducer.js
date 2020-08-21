import {
  GET_CORE_BUSINESS_SUPPLIER_LAYOUT,
  GET_RISK_MANAGEMENT_LAYOUT,
} from '../ActionTypes'

export const menu1Reducer = (state = [], action) => {
  switch (action.type) {
    case GET_CORE_BUSINESS_SUPPLIER_LAYOUT:
      return action.payload
    default:
      return state
  }
}

export const menu2Reducer = (state = [], action) => {
  switch (action.type) {
    case GET_RISK_MANAGEMENT_LAYOUT:
      return action.payload
    default:
      return state
  }
}
