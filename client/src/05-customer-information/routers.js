import {
  Group,
  Help,
  MonetizationOn,
  RateReview,
  OfflineBolt,
  SettingsInputSvideo,
  DataUsage
} from '@material-ui/icons'


import { menuList, navList } from './config';
import { Layout1, getMenu, getContent } from '../components'

const Routers = [
  {
    path: '客户基本信息',
    title: '客户基本信息',
    icon: Group,
    // component: C1,
  },
  {
    path: '财务信息',
    title: '财务信息',
    icon: MonetizationOn,
    // component: C2,
  },
  {
    path: '评级限额信息',
    title: '评级限额信息',
    icon: RateReview,
    // component: C3,
  },
  {
    path: '风险信息',
    title: '风险信息',
    icon: OfflineBolt,
    // component: C4,
  },
  {
    path: '关联信息',
    title: '关联信息',
    icon: SettingsInputSvideo,
    // component: C5,
  },
  {
    path: '现有数据',
    title: '现有数据',
    icon: DataUsage,
    // component: DataView,
  },
  {
    path: '帮助',
    title: '帮助',
    icon: Help,
    // component: Helper,
  },
];

export default Routers;
