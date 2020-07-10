import {
  OfflineBolt,
  Business,
  AttachMoney,
  SettingsApplications,
  SupervisorAccount,
  Home as AppHome,
  VerifiedUser,
  LockOpen,
  AccountBox,
  ExitToApp,
} from '@material-ui/icons'
import Home from './home'
import { SignIn, SignInSide, SignOut } from './signin'
import Signup from './signup'
import SpecialPlan from './01-special-plan-management'
import Asset from './02-asset-management'
import Abs from './03-abs'
import Admin from './04-admin-panel'
import Organization from './05-organization'
import { C404 } from './components'

export const BusinessRouters = [
  {
    path: '/专项计划管理',
    title: '专项计划管理',
    icon: Business,
    component: SpecialPlan,
  },
  {
    path: '/资产管理',
    title: '资产管理',
    icon: OfflineBolt,
    component: Asset,
  },
  {
    path: '/存续期管理',
    title: '存续期管理',
    icon: SupervisorAccount,
    component: Abs,
  },
  {
    path: '/后台管理',
    title: '后台管理',
    icon: AttachMoney,
    component: Admin,
  },
  {
    path: '/组织架构',
    title: '组织架构',
    icon: SettingsApplications,
    component: Organization,
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
    title: '登录 1',
    icon: VerifiedUser,
    component: SignIn,
  },
  {
    path: '/login',
    title: '登录 2',
    icon: LockOpen,
    component: SignInSide,
  },
  {
    path: '/logout',
    title: '退出',
    icon: ExitToApp,
    component: SignOut,
  },
  {
    path: '/signup',
    title: '注册',
    icon: AccountBox,
    component: Signup,
  },
]

export const BackdoorRouters = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '*',
    component: C404,
  },
]
