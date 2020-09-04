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
import {
  Album,
  Blog,
  Checkout,
  Dashboard,
  LightBulb,
  Pricing,
} from './material-ui-templates'
import * as AG  from './apollographql'
import * as CSB from './codesandbox'
import * as FP from './fileupload'

const navList = [
  {
    path: 'Material-UI-Demo',
    icon: MoveToInbox,
  },
  {
    path: 'Codesandbox',
    icon: FormatQuote,
  },
  {
    path: 'GraphQL',
    icon: People,
  },
  {
    path: '文件上传',
    icon: Payment,
  },
  {
    path: '其它',
    icon: TrackChanges,
  },

]

const mainList = [
  {
    nav: 'Material-UI-Demo',
    main: [
      {
        path: 'Album',
        icon: Payment,
        component: Album,
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
      },
      {
        path: 'Dashboard',
        icon: MergeType,
        component: Dashboard,
      },
      {
        path: 'Pricing',
        icon: Person,
        component: Pricing,
      },
    ],
  },
  {
    nav: 'Codesandbox',
    main: [
      {
        path: 'LightBulb',
        icon: BarChart,
        title: 'LightBulb',
        component: CSB.LightBulb,
      },
    ],
  },
  {
    nav: 'GraphQL',
    main: [
      {
        path: 'apollographql-demo-1',
        title: 'Demo 1',
        icon: FormatListBulleted,
        component: AG.Demo1
      },
      {
        path: 'apollographql-demo-2',
        title: 'Demo 2',
        icon: Description,
        component: AG.Demo2
      },
      {
        path: 'apollographql-demo-3',
        title: 'Demo 3',
        icon: AssignmentTurnedIn,
      },
      {
        path: 'apollographql-demo-4',
        title: 'Demo 4',
        icon: OpenInBrowser,
      },
    ],
  },
  {
    nav: '文件上传',
    main: [
      {
        path: '单文件上传',
        icon: MoneyOff,
      },
      {
        path: '多文件上传',
        icon: VerifiedUser,
      },
      {
        path: '照片上传',
        icon: Money,
      },
      {
        path: 'dropzone',
        icon: FilterVintage,
      }
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
