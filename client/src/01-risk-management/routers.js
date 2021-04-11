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
  Layers,
  Visibility,
  Update,
  Person,
  Lock,
  ListAlt,
  PlaylistAddCheck,
  CallToAction,
  QueryBuilder,
  LocalFlorist,
  Functions,
  OpenInBrowser,
  MergeType,
  MoveToInbox,
  ChromeReaderMode,
  Warning,
  MoneyOff,
  VerifiedUser,
  Money,
  Pinterest,
  AlarmOn,
  PersonPin,
  Description,
} from '@material-ui/icons'
import { C2_1, C2_2, C2_3, C5_2, C6_2, C6_3, C6_4, C7_1, C7_2, C7_3, C7_4, C9_1 } from './containers'
import * as live from './live'
import * as auth from './auth'

const navList = [
  {
    path: '系统管理',
    icon: LaptopWindows,
  },
  {
    path: '客户信息',
    icon: Message,
  },
  {
    path: '评级限额',
    icon: RateReview,
  },
  {
    path: '授信审批',
    icon: AssignmentTurnedIn,
  },
  {
    path: '额度管理',
    icon: FormatQuote,
  },
  {
    path: '文档管理',
    icon: Business,
  },
  {
    path: '贷后管理',
    icon: LocalAtm,
  },
  {
    path: '还款',
    icon: Payment,
  },
  {
    path: '运营管理',
    icon: DirectionsRun,
  },
  {
    path: '流程管理',
    icon: FilterVintage,
  },
]

const mainList = [
  {
    nav: '系统管理',
    main: [
      {
        path: '角色查询',
        title: 'Weather',
        icon: Person,
        component: live.OpenWeatherMap,
      },
      {
        path: '口令更改',
        title: 'Google Map',
        icon: Visibility,
        component: live.GoogleMap,
      },
      {
        path: 'NewsApi',
        icon: Update,
        component: live.NewsApi,
      },
      {
        path: 'Gnews',
        icon: Layers,
        component: live.GNews,
      },
    ],
  },
  {
    nav: '客户信息',
    main: [
      {
        path: '查询',
        icon: QueryBuilder,
        component: C2_1,
      },
      {
        path: '流程',
        icon: LocalFlorist,
        component: C2_2,
      },
      {
        path: '功能维护',
        icon: Functions,
        component: C2_3,
      },
    ],
  },
  {
    nav: '评级限额',
    main: [
      {
        path: 'infinite-loop',
        title: 'Infinite Loop',
        icon: Contacts,
        component: live.InfiniteLoop,
      },
      {
        path: 'Accounts',
        icon: LocalFlorist,
        component: auth.Account,
      },
    ],
  },
  {
    nav: '授信审批',
    main: [
      {
        path: '查询',
        icon: QueryBuilder,
      },
      {
        path: '流程',
        icon: LocalFlorist,
      },
    ],
  },
  {
    nav: '额度管理',
    main: [
      {
        path: '查询',
        icon: QueryBuilder,
      },
      {
        path: '流程',
        icon: LocalFlorist,
        component: C5_2,
      },
      {
        path: '功能维护',
        icon: Functions,
      },
      {
        path: 'POC流转（加查询）',
        icon: Description,
      },
    ],
  },
  {
    nav: '文档管理',
    main: [
      {
        path: '全部POC',
        icon: CallToAction,
      },
      {
        path: 'POC开立',
        icon: OpenInBrowser,
        component: C6_2,
      },
      {
        path: 'POC融资',
        icon: MergeType,
        component: C6_3,
      },
      {
        path: 'POC流转',
        icon: MoveToInbox,
        component: C6_4,
      },
    ],
  },
  {
    nav: '贷后管理',
    main: [
      {
        path: '贷后检查',
        icon: ChromeReaderMode,
        component: C7_1,
      },
      {
        path: '风险预警',
        icon: Warning,
        component: C7_2,
      },
    ],
  },
  {
    nav: '还款',
    main: [
      {
        path: '待还款',
        icon: MoneyOff,
        component: C7_3,
      },
      {
        path: '还款审批',
        icon: VerifiedUser,
        component: C7_4,
      },
      {
        path: '已还款',
        icon: Money,
      },
      {
        path: '罚息管理',
        icon: Pinterest,
      },
    ],
  },
  {
    nav: '运营管理',
    main: [
      {
        path: '清算',
        icon: ChromeReaderMode,
        component: C9_1,
      },
      {
        path: '交易查询',
        icon: AlarmOn,
      },
      {
        path: '账户信息',
        icon: PersonPin,
      },
    ],
  },
  {
    nav: '流程管理',
    main: [
      {
        path: '待办任务列表',
        icon: ListAlt,
      },
      {
        path: '本人完成任务',
        icon: PlaylistAddCheck,
      },
      {
        path: '全部结束任务',
        icon: CallToAction,
      },
    ],
  },
  {
    nav: '参数配置',
    main: [
      {
        path: '口令更改',
        icon: Visibility,
      },
      {
        path: '权限变更',
        icon: Lock,
      },
    ],
  },
]

export { navList, mainList }
