import {
  OfflineBolt,
  Business,
  BusinessCenter,
  AttachMoney,
  SettingsApplications,
  SupervisorAccount,
  Store,
  Home as AppHome,
  VerifiedUser,
  LockOpen,
  AccountBox,
  ExitToApp,
} from '@material-ui/icons'
import {
  Menus, DEFAULT_HOME_PAGE,
  DEFAULT_LOGIN_PAGE, DIALOG_LOGIN_PAGE,
  REGISTER_PAGE, SIGNOUT_PAGE,
} from './constants'
import Admin from './01-risk-management'
import Company from './02-core_business'
import Supplier from './03-supplier'
import Customer from './04-customer'
import Financing from './05-financing'
import Certificate from './06-certificate'
import Home from './08-home'
import Service from './09-service'
import { SignIn, SignInSide, SignUp, SignOut } from './07-sign'
import { C404 } from './containers'

// TODO:
const getRouters = () => {
  const ary = Menus.find((menu) => menu.type === 'Business').list
  ary.map(nav => ({
    path: `/$nav`,
    title: nav,
    icon: OfflineBolt,
    component: Admin,
  }))
}

const BusinessRouters = [
  {
    path: '/风险管理',
    title: '风险管理',
    icon: OfflineBolt,
    component: Admin,
  },
  {
    path: '/核心企业',
    title: '核心企业',
    icon: Business,
    component: Company,
  },
  {
    path: '/供应商',
    title: '供应商',
    icon: AttachMoney,
    component: Supplier,
  },
  {
    path: '/客户信息',
    title: '客户信息',
    icon: SupervisorAccount,
    component: Customer,
  },
  {
    path: '/融资管理', // financing
    title: '融资管理',
    icon: Store,
    component: Financing,
  },
  {
    path: '/凭证', // '/certificate',
    title: '凭证',
    icon: SettingsApplications,
    component: Certificate,
  },
]

const GeneralRouters = [
  {
    path: DEFAULT_HOME_PAGE, //~: /,
    title: '首页',
    exact: true,
    icon: AppHome,
    component: Home,
  },
  {
    path: '/09-service',
    title: 'Service',
    icon: BusinessCenter,
    component: Service,
  },
  {
    path: DEFAULT_LOGIN_PAGE, //~: /signin
    title: '登录',
    icon: VerifiedUser,
    component: SignIn,
  },
  {
    path: DIALOG_LOGIN_PAGE, //~: /login
    title: '切换用户',
    icon: LockOpen,
    component: SignInSide,
  },
  {
    path: SIGNOUT_PAGE, //~: /signout
    title: '退出',
    icon: ExitToApp,
    component: SignOut,
  },
  {
    path: REGISTER_PAGE, //~: /signup
    title: '注册',
    icon: AccountBox,
    component: SignUp,
  },
]

const BackdoorRouters = [
  {
    path: '/08-home',
    title: '首页',
    component: Home,
  },
  {
    path: '*',
    component: C404,
  },
]

export { BusinessRouters, GeneralRouters, BackdoorRouters }
