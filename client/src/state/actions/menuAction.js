import {
  GET_CORE_BUSINESS_SUPPLIER_LAYOUT,
  GET_RISK_MANAGEMENT_LAYOUT,
} from '../ActionTypes'

// TODO: add getHeader as fetch's option

const getMenu1 = (payload) => ({
  type: GET_CORE_BUSINESS_SUPPLIER_LAYOUT,
  payload,
})
const getMenu2 = (payload) => ({ type: GET_RISK_MANAGEMENT_LAYOUT, payload })

export const getMenu1Action = () => (dispatch) =>
  fetch(`/data/enterprise_supplier`)
    .then((res) => res.json())
    .then((data) => dispatch(getMenu1(data)))
    .catch((e) => console.log(e))

export const getMenu2Action = () => (dispatch) =>
  fetch(`/data/risk_management`)
    .then((res) => res.json())
    .then((data) => dispatch(getMenu2(data)))
    .catch((e) => console.log(e))
