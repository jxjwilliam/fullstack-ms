export const DEFAULT_HOME_PAGE = '/'
export const DEFAULT_LOGIN_PAGE = '/signin'
export const REGISTER_PAGE = '/signup'

export const Menus = [
  {
    type: 'Business',
    list: ['风险管理', '核心企业', '供应商', '客户信息', '融资管理', '凭证'],
  },
  {
    type: 'General',
    list: ['登录', '切换用户登录', '退出', '注册'],
  },
  {
    type: 'Others',
    list: ['首页', '404'],
  },
]

export const Emails = {
  admin: 'admin@poc.com',
  support: 'support@poc.com',
}

export const Contacts = {
  office: '1(604)-274-6829',
  business: '1(778)-881-2489',
}

export const HEADERS = {
  'Content-type': 'application/json',
  'Accept': 'application/json',
}

export const TOKEN = 'authToken'
