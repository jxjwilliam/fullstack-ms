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
  Visibility as VisibilityIcon,
  Update as UpdateIcon,
  Person as PersonIcon,
  Lock,
  ListAlt,
  PlaylistAddCheck,
  CallToAction,
  QueryBuilder as QueryBuilderIcon,
  LocalFlorist as LocalFloristIcon,
  Functions as FunctionsIcon,
  OpenInBrowser,
  MergeType,
  MoveToInbox,
  ChromeReaderMode,
  Warning,
  MoneyOff as MoneyOffIcon,
  VerifiedUser,
  Money as MoneyIcon, Pinterest as PinterestIcon, AlarmOn, PersonPin
} from '@material-ui/icons'
import {Layout} from "../components/layout";
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";
import C5 from "./C5";
import C6 from "./C6";
import C7 from "./C7";
import C8 from "./C8";
import C9 from "./C9";
import C10 from "./C10";
import C11 from "./C11";
import {C2_1, C2_2, C2_3, C3_1, C5_2, C6_2, C6_3, C6_4, C7_1, C7_2, C9_1} from "./containers";

export const BASE = '/风险管理';
export const subRouters = [
  '系统管理',
  '客户信息',
  '评级限额',
  '授信审批',
  '额度管理',
  '文档管理',
  '贷后管理',
  '还款',
  '运营管理',
  '流程管理',
  '参数配置'
]

const NavList = [
  {
    path: subRouters['系统管理'],
    title: '系统管理',
    icon: LaptopWindows,
  }, {
    path: subRouters['客户信息'],
    title: '客户信息',
    icon: Message,
  }, {
    path: subRouters['评级限额'],
    title: '评级限额',
    icon: RateReview,
  }, {
    path: subRouters['授信审批'],
    title: '授信审批',
    icon: AssignmentTurnedIn,
  },
  {
    path: subRouters['额度管理'],
    title: '额度管理',
    icon: FormatQuote,
  }, {
    path: subRouters['文档管理'],
    title: '文档管理',
    icon: Business,
  }, {
    path: subRouters['贷后管理'],
    title: '贷后管理',
    icon: LocalAtm,
  },
  {
    path: subRouters['还款'],
    title: '还款',
    icon: Payment,
  }, {
    path: subRouters['运营管理'],
    title: '运营管理',
    icon: DirectionsRun,
  }, {
    path: subRouters['流程管理'],
    title: '流程管理',
    icon: FilterVintage,
  }, {
    path: subRouters['参数配置'],
    title: '参数配置',
    icon: Layers,
  }
];

const MainList = [
  {
    nav: '系统管理',
    main: [
      {
        path: "口令更改",
        icon: VisibilityIcon
      },
      {
        path: "用户信息权限变更",
        icon: UpdateIcon
      },
      {
        path: "角色查询",
        icon: PersonIcon
      },
    ]
  },
  {
    nav: '客户信息',
    main: [
      {
        path: "查询",
        icon: QueryBuilderIcon,
        component: C2_1
      },
      {
        path: "流程",
        icon: LocalFloristIcon,
        component: C2_2
      },
      {
        path: "功能维护",
        icon: FunctionsIcon,
        component: C2_3
      },
    ],
  },
  {
    nav: '评级限额',
    main: [
      {
        path: "查询",
        icon: QueryBuilder,
        component: C3_1
      },
      {
        path: "流程",
        icon: LocalFlorist
      },
    ],
  },
  {
    nav: '授信审批',
    main: [
      {
        path: "查询",
        icon: QueryBuilderIcon,
      },
      {
        path: "流程",
        icon: LocalFloristIcon
      },
    ],
  },
  {
    nav: '额度管理',
    main: [  {
      path: "查询",
      icon: QueryBuilderIcon
    },
      {
        path: "流程",
        icon: LocalFloristIcon,
        component: C5_2,
      },
      {
        path: "功能维护",
        icon: FunctionsIcon
      },
      {
        path: "POC流转（加查询）",
        icon: Description
      },],
  },
  {
    nav: '文档管理',
    main: [
      {
        path: "全部POC",
        icon: CallToAction
      },
      {
        path: "POC开立",
        icon: OpenInBrowser,
        component: C6_2
      },
      {
        path: "POC融资",
        icon: MergeType,
        component: C6_3
      },
      {
        path: "POC流转",
        icon: MoveToInbox,
        component: C6_4
      },
    ],
  },
  {
    nav: '贷后管理',
    main: [
      {
        path: "贷后检查",
        icon: ChromeReaderMode,
        component: C7_1
      },
      {
        path: "风险预警",
        icon: Warning,
        component: C7_2
      },
    ],
  },
  {
    nav: '还款',
    main: [
      {
        path: '待还款',
        icon: MoneyOffIcon
      },
      {
        path: '还款审批',
        icon: VerifiedUser
      },
      {
        path: '已还款',
        icon: MoneyIcon
      },
      {
        path: '罚息管理',
        icon: PinterestIcon
      },
    ],
  },
  {
    nav: '运营管理',
    main: [
      {
        path: "清算",
        icon: ChromeReaderMode,
        component: C9_1
      },
      {
        path: "交易查询",
        icon: AlarmOn
      },
      {
        path: "账户信息",
        icon: PersonPin
      },
    ],
  },
  {
    nav: '流程管理',
    main: [
      {
        path: "待办任务列表",
        icon: ListAlt
      },
      {
        path: "本人完成任务",
        icon: PlaylistAddCheck
      }, {
        path: "全部结束任务",
        icon: CallToAction
      },
    ],
  },
  {
    nav: '参数配置',
    main: [
      {
        path: "口令更改",
        icon: Visibility
      },
      {
        path: "权限变更",
        icon: Lock
      },
    ],
  },

]
