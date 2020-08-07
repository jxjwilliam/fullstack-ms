import {Layout} from '../components'
import {Menu1, Content1} from './C1'
import {Menu2, Content2} from './C2'
import {Menu3, Content3} from './C3'
import {Menu4, Content4} from './C4'
import {ContactSupport, Payment, MoveToInbox, People, FormatQuote} from '@material-ui/icons'
import subRouters, {BASE} from './common';

const C1 = Layout(Menu1, Content1);
const C2 = Layout(Menu2, Content2);
const C3 = Layout(Menu3, Content3);
const C4 = Layout(Menu4, Content4);

const Routers = [
  {
    path: subRouters['盟信额度'],
    title: '盟信额度',
    icon: FormatQuote,
    component: C1,
  },
  {
    path: subRouters['盟信管理'],
    title: '盟信管理',
    icon: People,
    component: C2,
  },
  {
    path: subRouters['盟信流转'],
    title: '盟信流转',
    icon: MoveToInbox,
    component: C3
  },
  {
    path: subRouters['还款管理'],
    title: '还款管理',
    icon: Payment,
    component: C4,
  }
];

export default Routers;
