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
import Layout from '../components/Layout'
import C1 from './C1'
import C2 from './C2'
import C3 from './C3'
import C4 from './C4'

import { subRouters, getMenu, getContent } from './common';

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
    icon: RateReview,
    component: Layout(C3[0], C3[1]),
  }, {
    path: subRouters['授信审批'],
    title: '授信审批',
    icon: AssignmentTurnedIn,
    component: Layout(C4[0], C4[1]),
  },
];

export default Routers;
