import React from 'react';
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
  Money
} from '@material-ui/icons'
import {C1_1, C2_1, C3_1, C3_2, C3_3} from "./containers";

const base = '核心企业'

const navList = [
  {
    path: 'POC额度',
    icon: FormatQuote,
  },
  {
    path: 'POC管理',
    icon: People,
  },
  {
    path: 'POC流转',
    icon: MoveToInbox,
  },
  {
    path: '还款管理',
    icon: Payment,
  },
]

const mainList = [
  {
    nav: 'POC额度',
    main: [{
      path: "额度查询",
      icon: BarChart,
      title: "额度查询",
      component: C1_1,
    }]
  },
  {
    nav: 'POC管理',
    main: [
      {
        path: "我的POC",
        icon: Person,
        component: C2_1,
      },
      {
        path: "申请单列表",
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
      }
    ]
  },
  {
    nav: 'POC流转',
    main: [
      {
        path: "POC收支",
        icon: Payment,
        component: C3_1,
      },
      {
        path: "POC融资",
        icon: MergeType,
        component: C3_2
      },
      {
        path: "转让回执",
        icon: AssignmentReturned,
        component: C3_3
      },
    ]
  },
  {
    nav: '还款管理',
    main: [
      {
        path: "待还款",
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
    ]
  },
  {
    nav: '其它',
    main: [
      {
        path: "帮助",
        icon: ContactSupport,
      },
    ]
  }
]

export { navList, mainList };
