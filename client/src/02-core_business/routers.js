import {
  ContactSupport,
  Payment,
  MoveToInbox,
  People,
  FormatQuote,
  BarChart,
  Person,
  Description,
  AssignmentTurnedIn,
  OpenInBrowser,
  MergeType,
  FormatListBulleted,
  AssignmentReturned,
  MoneyOff,
  VerifiedUser,
  Money,
  FilterVintage,
  TrackChanges,
  PersonPin,
  ExpandLess,
  ExpandMore,
  StarBorder
} from '@material-ui/icons'
import Blog from './blog/Blog'
import Checkout from './checkout/Checkout'
import Dashboard from './dashboard/Dashboard'
import { LightBulb, Pricing, Album } from './containers'


const navList = [
  {
    path: 'Codesandbox',
    icon: FormatQuote,
  },
  {
    path: 'POC管理',
    icon: People,
  },
  {
    path: 'Material-UI-Demo',
    icon: MoveToInbox,
  },
  {
    path: '还款管理',
    icon: Payment,
  },
]

const mainList = [
  {
    nav: 'Codesandbox',
    main: [
      {
        path: 'LightBulb',
        icon: BarChart,
        title: 'LightBulb',
        component: LightBulb,
      },
    ],
  },
  {
    nav: 'POC管理',
    main: [
      {
        path: 'Pricing',
        icon: Person,
        component: Pricing,
      },
      {
        path: '申请单列表',
        icon: FormatListBulleted,
      },
      {
        path: 'POC开具制单',
        icon: Description,
      },
      {
        path: 'POC开具复核',
        icon: AssignmentTurnedIn,
      },
      {
        path: '已开POC',
        icon: OpenInBrowser,
      },
    ],
  },
  {
    nav: 'Material-UI-Demo',
    main: [
      {
        path: 'Album',
        icon: Payment,
        component: Album,
      },
      {
        path: 'Dashboard',
        icon: MergeType,
        component: Dashboard,
      },
      {
        path: 'Blog',
        icon: AssignmentReturned,
        component: Blog,
      },
      {
        path: 'Checkout',
        icon: FormatListBulleted,
        component: Checkout,
      }
    ],
  },
  {
    nav: '还款管理',
    main: [
      {
        path: '待还款',
        icon: MoneyOff,
      },
      {
        path: '还款审批',
        icon: VerifiedUser,
      },
      {
        path: '已还款',
        icon: Money,
      },
    ],
  },
  {
    nav: '其它',
    main: [
      {
        path: '帮助',
        icon: ContactSupport,
      },
    ],
  },
]

export { navList, mainList }
