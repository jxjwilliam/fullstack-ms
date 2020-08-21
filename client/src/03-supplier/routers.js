import {
  BarChart,
  ContactSupport,
  Description,
  FormatListNumberedRtl,
  InsertChart,
  Layers,
  People,
  SupervisedUserCircle,
  Textsms
} from "@material-ui/icons";
import {C2_1, C3_1, C3_2, C3_3} from "./containers";
import {dialogs, modals} from "../components";

const base = '供应商'

const navList = [
  {
    path: 'POC额度',
    icon: FormatListNumberedRtl,
  },
  {
    path: 'POC管理',
    icon: InsertChart,
  },
  {
    path: 'POC流转',
    icon: ContactSupport,
  },
  {
    path: '还款管理',
    icon: SupervisedUserCircle,
  },
  {
    path: '列表',
    icon: Textsms,
  }, {
    path: '帮助',
    icon: Description,
  }
];

const mainList = [
  {
    nav: 'POC额度',
    main: [
      {
        path: "额度查询",
        icon: BarChart
      },
      {
        path: "额度分配（发起额度分配流程）",
        icon: Layers
      },
      {
        path: "额度变更（发起额度变更流程）",
        icon: People
      },
    ]
  },
  {
    nav: 'POC管理',
    main: [
      {
        path: "我的POC",
        icon: BarChart
      },
      {
        path: 'POC开具制单',
        icon: Layers
      },
      {
        path: 'POC开具复核',
        icon: People
      },
      {
        path: '已开POC',
        icon: People,
        component: C2_1,
      }
    ]
  },
  {
    nav: 'POC流转',
    main: [
      {
        path: "POC收支",
        icon: BarChart,
        component: C3_1,
      },
      {
        path: "POC融资",
        icon: Layers,
        component: C3_2
      },
      {
        path: "转让回执",
        icon: People,
        component: C3_3
      },
    ]
  },
  {
    nav: '还款管理',
    main: [
      {
        path: "代还款",
        icon: BarChart,
      },
      {
        path: '还款审批',
        icon: Layers,
      },
      {
        path: '已还款',
        icon: Layers,
      },
    ]
  },
  {
    nav: '列表',
    main: [
      {
        path: '账户管理',
        icon: BarChart,
      },
      {
        path: '信息1',
        icon: Layers,
      },
      {
        path: '信息2',
        icon: People,
      }
    ]
  },
  {
    nav: '帮助',
    main: [
      {
        path: '帮助中心',
        icon: BarChart,
        component: dialogs.Dialog2,
      },
      {
        path: '公司简介',
        icon: People,
        component: dialogs.Dialog1,
      },
      {
        path: '注册指导',
        icon: Layers,
        component: modals.Modal1,
      },
    ]
  },
]

export {base, navList, mainList}
