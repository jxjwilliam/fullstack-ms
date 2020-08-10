import {
  LaptopWindows,
  Message,
  RateReview,
  AssignmentTurnedIn,
  FormatQuote,
  Business,
  Payment,
  LocalAtm,
  DirectionsRun,
  FilterVintage,
  Layers
} from '@material-ui/icons'

import { menuList, navList } from './config';
import { Layout, getMenu, getContent } from '../components'

// const routerList = routerList.find(item => item.nav === path).main
export function getAllRouters(menuList, navList) {
  return menuList.map(({path, icon}, idx) => {
    console.log(path, icon, idx);
    // const subAry = getSubRouters(idx, value);
    // const Menu = getMenu(key, subAry);
    // const Content = getContent(key, subAry);
    // return {
    //   title: path,
    //   icon: icon,
    //   path: `${BASE}/${key}`,
    //   component: Layout(Menu, Content)
    // }
  })
}

const Routers = [
  {
    path: '系统管理',
    title: '系统管理',
    icon: LaptopWindows,
    // component: Layout(C1[0], C1[1]),
  }, {
    path: '客户信息',
    title: '客户信息',
    icon: Message,
    // component: Layout(C2[0], C2[1]),
  }, {
    path: '评级限额',
    title: '评级限额',
    icon: RateReview,
    // component: Layout(C3[0], C3[1]),
  }, {
    path: '授信审批',
    title: '授信审批',
    icon: AssignmentTurnedIn,
    // component: Layout(C4[0], C4[1]),
  },
  {
    path: '额度管理',
    title: '额度管理',
    icon: FormatQuote,
    // component: Layout(C5[0], C5[1]),
  }, {
    path: '文档管理',
    title: '文档管理',
    icon: Business,
    // component: Layout(C6[0], C6[1]),
  }, {
    path: '贷后管理',
    title: '贷后管理',
    icon: LocalAtm,
    // component: Layout(C7[0], C7[1]),
  },
  {
    path: '还款',
    title: '还款',
    icon: Payment,
    // component: Layout(C8[0], C8[1]),
  }, {
    path: '运营管理',
    title: '运营管理',
    icon: DirectionsRun,
    // component: Layout(C9[0], C9[1]),
  }, {
    path: '流程管理',
    title: '流程管理',
    icon: FilterVintage,
    // component: Layout(C10[0], C10[1]),
  }, {
    path: '参数配置',
    title: '参数配置',
    icon: Layers,
    // component: Layout(C11[0], C11[1])
  }
];

export default Routers;
