import {Layout} from '../components'
import {
  FormatListNumberedRtl,
  InsertChart,
  ContactSupport,
  SupervisedUserCircle,
  Textsms,
  Description
} from '@material-ui/icons'

import {Menu1, Content1} from './C1'
import {Menu2, Content2} from './C2'
import {Menu3, Content3} from './C3'
import {Menu4, Content4} from './C4'
import {ListMenu, ListContent} from './List'
import {HelpMenu, HelpContent} from './Helper'
import subRouters from './common'

const C1 = Layout(Menu1, Content1)
const C2 = Layout(Menu2, Content2)
const C3 = Layout(Menu3, Content3)
const C4 = Layout(Menu4, Content4)
const List = Layout(ListMenu, ListContent)
const Helper = Layout(HelpMenu, HelpContent)

const Routers = [
  {
    path: subRouters['盟信额度'],
    title: '盟信额度',
    icon: FormatListNumberedRtl,
    component: C1,
  },
  {
    path: subRouters['盟信管理'],
    title: '盟信管理',
    icon: InsertChart,
    component: C2,
  },
  {
    path: subRouters['盟信流转'],
    title: '盟信流转',
    icon: ContactSupport,
    component: C3
  },
  {
    path: subRouters['还款管理'],
    title: '还款管理',
    icon: SupervisedUserCircle,
    component: C4,
  },
  {
    path: subRouters['列表'],
    title: '列表',
    icon: Textsms,
    component: List,
  }, {
    path: subRouters['帮助'],
    title: '帮助',
    icon: Description,
    component: Helper,
  }

];

export default Routers;
