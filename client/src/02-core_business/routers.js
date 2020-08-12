import { ContactSupport, Payment, MoveToInbox, People, FormatQuote } from '@material-ui/icons'

import { menuList, navList } from './config';
import { Layout1, getMenu, getContent } from '../components'

const Routers = [
  {
    path: 'POC额度',
    title: 'POC额度',
    icon: FormatQuote,
    // component: C1,
  },
  {
    path: 'POC管理',
    title: 'POC管理',
    icon: People,
    // component: C2,
  },
  {
    path: 'POC流转',
    title: 'POC流转',
    icon: MoveToInbox,
    // component: C3
  },
  {
    path: '还款管理',
    title: '还款管理',
    icon: Payment,
    // component: C4,
  }
];

export default Routers;
