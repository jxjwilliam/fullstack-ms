import Home from './home';
import {SignIn, SignInSide, SignOut} from './signin'
import Signup from './signup'
import Admin from './01-risk-management'
import Company from './02-core_business'
import Supplier from './03-supplier'
import Certificate from './04-certificate'
import General from './05-customer-information'
import Financing from './06-financing'
import {C404} from './components/misc'
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
    path: '/核心企业及供应商',
    title: '核心企业及供应商',
    icon: Business,
    component: Company,
  },
  {
    path: '/风险管理',
    title: '风险管理',
    icon: OfflineBolt,
    component: Admin,
  },
  {
    path: '/客户信息',
    title: '客户信息',
    icon: SupervisorAccount,
    component: General,
  },
  {
    path: '/供应商',
    title: '供应商',
    icon: AttachMoney,
    component: Supplier,
  },
  {
    path: '/certificate',
    title: '凭证',
    icon: SettingsApplications,
    component: Certificate,
  },
  {
    path: '/financing',
    title: '融资管理',
    icon: Store,
    component: Financing,
  }
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
    title: '登录 1',
    icon: VerifiedUser,
    component: SignIn,
  }, {
    path: '/login',
    title: '登录 2',
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
    component: Home,
  },
  {
    path: "*",
    component: C404,
  }
]

