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
  AvTimer,
  StarBorder,
} from '@material-ui/icons'
import { Album, Blog, Checkout, Dashboard, Pricing } from './material-ui-templates'
import * as AG from './apollographql'
import * as CSB from './codesandbox'
import * as FU from './fileupload'
import Timer from './timer'

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
        icon: PersonPin,
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
      {
        path: 'Carousel',
        icon: StarBorder,
        component: CSB.Carousel,
      },
    ],
  },
  {
    nav: 'GraphQL',
    main: [
      {
        path: 'graphqlzero',
        title: 'Graphqlzero 🚀',
        icon: ContactSupport,
        component: AG.Graphqlzero,
      },
      {
        path: 'github',
        title: 'Github',
        icon: Description,
        component: AG.Github,
      },
      {
        path: 'apollographql-demo-3',
        title: 'Local Server',
        icon: AssignmentTurnedIn,
        component: AG.Local,
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
        component: FU.Single,
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
      },
    ],
  },
  {
    nav: '其它',
    main: [
      {
        path: 'timer',
        icon: AvTimer,
        component: Timer,
      },
    ],
  },
]

export { navList, mainList }
