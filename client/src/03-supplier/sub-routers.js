import {
  FormatListNumberedRtl,
  InsertChart,
  ContactSupport,
  SupervisedUserCircle,
  Textsms,
  Description
} from '@material-ui/icons'

import { menuList, navList } from './config';
import { Layout, getMenu, getContent } from '../components'

const Routers = [
  {
    path: 'POC额度',
    title: 'POC额度',
    icon: FormatListNumberedRtl,
    component: C1,
  },
  {
    path: 'POC管理',
    title: 'POC管理',
    icon: InsertChart,
    component: C2,
  },
  {
    path: 'POC流转',
    title: 'POC流转',
    icon: ContactSupport,
    component: C3
  },
  {
    path: '还款管理',
    title: '还款管理',
    icon: SupervisedUserCircle,
    component: C4,
  },
  {
    path: '列表',
    title: '列表',
    icon: Textsms,
    component: List,
  }, {
    path: '帮助',
    title: '帮助',
    icon: Description,
    component: Helper,
  }

];

export default Routers;
