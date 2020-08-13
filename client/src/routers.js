import Home from './home';
import { SignIn, SignInSide, SignOut } from './signin'
import Signup from './signup'
import Admin from './01-risk-management'
import Company from './02-core_business'
import Supplier from './03-supplier'
import Customer from './04-customer'
import Financing from './05-financing'
import Certificate from './06-certificate'
import { C404 } from './containers'
import {
  OfflineBolt,
  Business,
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

export const BusinessRouters = [
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
    path: '/融资管理', //financing
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

export const GeneralRouters = [
  {
    path: '/',
    title: '首页',
    exact: true,
    icon: AppHome,
    component: Home,
  },
  {
    path: '/signin',
    title: '登录',
    icon: VerifiedUser,
    component: SignIn,
  }, {
    path: '/login',
    title: '切换用户登录',
    icon: LockOpen,
    component: SignInSide,
  }, {
    path: '/logout',
    title: '退出',
    icon: ExitToApp,
    component: SignOut,
  }, {
    path: '/signup',
    title: '注册',
    icon: AccountBox,
    component: Signup,
  },
];

export const BackdoorRouters = [
  {
    path: '/home',
    title: '首页',
    component: Home,
  },
  {
    path: "*",
    component: C404,
  }
]

