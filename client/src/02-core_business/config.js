import React, { Component } from 'react';
import {
  ContactSupport,
  Payment,
  MoveToInbox,
  People,
  FormatQuote,
  BarChart as BarChartIcon,
  Person,
  Description,
  AssignmentTurnedIn,
  OpenInBrowser,
  Payment as PaymentIcon,
  MergeType as MergeTypeIcon,
  AssignmentReturned as AssignmentReturnedIcon,
  MoneyOff as MoneyOffIcon,
  VerifiedUser as VerifiedUserIcon,
  Money as MoneyIcon
} from '@material-ui/icons'
import {C3_1, C3_2, C3_3} from "./containers";

const menuList = [
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

const navList = [
  {
    nav: 'POC额度',
    main: [{
      path: "额度查询",
      icon: BarChartIcon,
      component: SetView('m1'),
    }]
  },
  {
    nav: 'POC管理',
    main: [
      {
        path: "我的POC",
        icon: Person,
        component: SetView('m2-1'),
      },
      {
        path: "申请单列表",
        icon: FormatListBulleted,
        component: SetView('m2-2'),
      },
      {
        path: 'POC开具制单',
        icon: Description,
        component: SetView('m2-3'),
      },
      {
        path: 'POC开具复核',
        icon: AssignmentTurnedIn,
        component: SetView('m2-4'),
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
        icon: PaymentIcon,
        component: C3_1,
      },
      {
        path: "POC融资",
        icon: MergeTypeIcon,
        component: C3_2
      },
      {
        path: "转让回执",
        icon: AssignmentReturnedIcon,
        component: C3_3
      },
    ]
  },
  {
    nav: '还款管理',
    main: [
      {
        path: "待还款",
        icon: MoneyOffIcon,
        component: SetView('m4-1'),
      },
      {
        path: '还款审批',
        icon: VerifiedUserIcon,
        component: SetView('m4-2'),
      },
      {
        path: '已还款',
        icon: MoneyIcon,
        component: SetView('m4-3'),
      },
    ]
  },
  {
    nav: '其它',
    main: [
      {
        path: "帮助",
        icon: ContactSupport,
        component: SetView('m4-1'),
      },
    ]
  }
]

export { menuList, navList };
