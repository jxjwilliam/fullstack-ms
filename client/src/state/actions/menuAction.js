import { GET_CORE_BUSINESS_SUPPLIER_LAYOUT, GET_RISK_MANAGEMENT_LAYOUT } from '../ActionTypes'
import { fetching } from '../../helpers/utils'

const getMenu1 = payload => ({
  type: GET_CORE_BUSINESS_SUPPLIER_LAYOUT,
  payload,
})
const getMenu2 = payload => ({
  type: GET_RISK_MANAGEMENT_LAYOUT,
  payload,
})

export const getMenu1Action = () => dispatch =>
  fetching(`/data/enterprise_supplier`)
    .then(data => dispatch(getMenu1(data)))
    .catch(e => console.log(e))

export const getMenu2Action = () => dispatch =>
  fetching(`/data/risk_management`)
    .then(data => dispatch(getMenu2(data)))
    .catch(e => console.log(e))

const menus = [
  ['/data/enterprise_supplier', GET_CORE_BUSINESS_SUPPLIER_LAYOUT],
  ['/data/risk_management', GET_RISK_MANAGEMENT_LAYOUT],
]
const useType = (menu, payload) => {
  return {
    type: menus[menu],
    payload,
  }
}
const getMenu = menu => () => dispatch => {
  return fetching(menu)
    .then(data => dispatch(useType(menu, data)))
    .catch(err => console.log(err))
}
