import subRouters from "./common";
import {
  BarChart as BarChartIcon,
  ContactSupport,
  Description,
  FormatListNumberedRtl,
  InsertChart, Layers as LayersIcon, People as PeopleIcon,
  SupervisedUserCircle,
  Textsms
} from "@material-ui/icons";
import {C2_1, C3_1, C3_2, C3_3} from "./containers";
import {dialogs, modals} from "../components";

const menuList = [
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

const navList = [
  {
    nav: 'POC额度',
    main: [
      {
        path: "额度查询",
        icon: BarChartIcon
      },
      {
        path: "额度分配（发起额度分配流程）",
        icon: LayersIcon
      },
      {
        path: "额度变更（发起额度变更流程）",
        icon: PeopleIcon
      },
    ]
  },
  {
    nav: 'POC管理',
    main: [
      {
        path: "我的POC",
        icon: BarChartIcon
      },
      {
        path: 'POC开具制单',
        icon: LayersIcon
      },
      {
        path: 'POC开具复核',
        icon: PeopleIcon
      },
      {
        path: '已开POC',
        icon: PeopleIcon,
        component: C2_1,
      }
    ]
  },
  {
    nav: 'POC流转',
    main: [
      {
        path: "POC收支",
        icon: BarChartIcon,
        component: C3_1,
      },
      {
        path: "POC融资",
        icon: LayersIcon,
        component: C3_2
      },
      {
        path: "转让回执",
        icon: PeopleIcon,
        component: C3_3
      },
    ]
  },
  {
    nav: '还款管理',
    main: [
      {
        path: "代还款",
        icon: BarChartIcon,
      },
      {
        path: '还款审批',
        icon: LayersIcon,
      },
      {
        path: '已还款',
        icon: LayersIcon,
      },
    ]
  },
  {
    nav: '列表',
    main: [
      {
        path: '账户管理',
        icon: BarChartIcon,
        component: List,
      },
      {
        path: '信息1',
        icon: LayersIcon,
        component: List,
      },
      {
        path: '信息2',
        icon: PeopleIcon,
        component: List,
      }
    ]
  },
  {
    nav: '帮助',
    main: [
      {
        path: '帮助中心',
        icon: BarChartIcon,
        component: dialogs.Dialog2,
      },
      {
        path: '公司简介',
        icon: PeopleIcon,
        component: dialogs.Dialog1,
      },
      {
        path: '注册指导',
        icon: LayersIcon,
        component: modals.Modal1,
      },
    ]
  },
]

export {menuList, navList}
