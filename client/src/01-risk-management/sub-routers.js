import Layout from '../components/Layout'
import {
  Payment,
  Contacts,
  LaptopWindows,
  Message,
  RateReview,
  AssignmentTurnedIn,
  FormatQuote,
  Business,
  LocalAtm,
  DirectionsRun,
  FilterVintage,
  Layers
} from '@material-ui/icons'

import C1 from './C1'
import C2 from './C2'
import C3 from './C3'
import C4 from './C4'
import C5 from './C5'
import C6 from './C6'
import C7 from './C7'
import C8 from './C8'
import C9 from './C9'
import C10 from './C10'
import C11 from './C11'
import {subRouters, getMenu, getContent} from './common';

const Routers = [
  {
    path: subRouters['系统管理'],
    title: '系统管理',
    icon: LaptopWindows,
    component: Layout(C1[0], C1[1]),
  }, {
    path: subRouters['客户信息'],
    title: '客户信息',
    icon: Message,
    component: Layout(C2[0], C2[1]),
  }, {
    path: subRouters['评级限额'],
    title: '评级限额',
    icon:  RateReview,
    component: Layout(C3[0], C3[1]),
  },{
    path: subRouters['授信审批'],
    title: '授信审批',
    icon:  AssignmentTurnedIn,
    component: Layout(C4[0], C4[1]),
  },
  {
    path: subRouters['额度管理'],
    title: '额度管理',
    icon: FormatQuote,
    component: Layout(C5[0], C5[1]),
  }, {
    path: subRouters['盟信'],
    title: '盟信',
    icon: Business,
    component: Layout(C6[0], C6[1]),
  }, {
    path: subRouters['贷后管理'],
    title: '贷后管理',
    icon:  LocalAtm,
    component: Layout(C7[0], C7[1]),
  },
  {
    path: subRouters['还款'],
    title: '还款',
    icon: Payment,
    component: Layout(C8[0], C8[1]),
  }, {
    path: subRouters['运营管理'],
    title: '运营管理',
    icon: DirectionsRun,
    component: Layout(C9[0], C9[1]),
  }, {
    path: subRouters['流程管理'],
    title: '流程管理',
    icon: FilterVintage,
    component: Layout(C10[0], C10[1]),
  }, {
    path: subRouters['参数配置'],
    title: '参数配置',
    icon:  Layers,
    component: Layout(C11[0], C11[1])
  }
];

export default Routers;
