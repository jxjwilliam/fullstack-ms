import Layout from '../components/Layout'
import subRouters from './common'
import {Menu1, Content1} from './AccountCenter'
import {Menu2, Content2} from './Management'
import {Menu3, Content3} from './Financing'
import {Menu4, Content4} from './Stuff'
import {Menu5, Content5} from './Corporation'
import {ContactSupport, Shop, Apps, People} from '@material-ui/icons'

const Account = Layout(Menu1, Content1)

const Management = Layout(Menu2, Content2)

const Financing = Layout(Menu3, Content3)

const Stuff = Layout(Menu4, Content4)

const Corporation = Layout(Menu5, Content5)

const Routers = [
  {
    path: subRouters['用户中心'],
    title: '用户中心',
    icon: People,
    component: Account,
  }, {
    path: subRouters.盟信管理,
    title: '盟信管理',
    icon: Apps,
    component: Management
  }, {
    path: subRouters.盟信融资,
    title: '盟信融资',
    icon: Shop,
    component: Financing,
  }, {
    path: subRouters['人员管理'],
    title: '人员管理',
    icon: Apps,
    component: Stuff
  }, {
    path: subRouters['企业设置'],
    title: '企业设置',
    icon: ContactSupport,
    component: Corporation,
  }
];

export default Routers;
