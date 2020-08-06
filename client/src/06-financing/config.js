import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  ContactSupport, Shop, Apps, People,
  SupervisedUserCircle,
  ContactMail,
  WrapText,
  Textsms,
  FilterVintage,
  TrackChanges,
  Description,
  PersonPin,
  SupervisedUserCircle,
  ContactMail,
  WrapText,
  Textsms,
  FilterVintage,
  TrackChanges,
  Description,
  FilterVintage,
  TrackChanges,
  SupervisedUserCircle,
  ContactMail,
  WrapText,
} from '@material-ui/icons';
import { Route } from 'react-router-dom';
import Accordion from '../components/Accordion'

/**
 * TODO: Object.entries, reduce/map, Map/Set, Array.from/Array.fromEntries, recursive
 * <Resource component=Menu1 ...props>
 *     <Resource component=SubMenu1 ...props />
 *     <Resource component=SubMenu2 ...props>
 *         <Resource component=SubsubMenu1 ...props />
 *         <Resource component=SubsubMenu2 ...props />
 *         <Resource component=SubsubMenu3 ...props />
 *     </Resouce>
 *     <Resource component=SubMenu3 ...props />
 * </Resource>
 */
const Routers = [
  {
    path: subRouters['用户中心'],
    title: '用户中心',
    icon: People,
    component: Account,
    render: () => { }
  }, {
    path: subRouters.盟信管理,
    title: '盟信管理',
    icon: Apps,
    component: Management
  }, {
    path: subRouters.盟信融资,
    title: '盟信融资',
    icon: Shop,
    component: Financing,
  }, {
    path: subRouters['人员管理'],
    title: '人员管理',
    icon: Apps,
    component: Stuff
  }, {
    path: subRouters['企业设置'],
    title: '企业设置',
    icon: ContactSupport,
    component: Corporation,
  }
];

const subRouters = [
  '用户中心',
  '盟信管理',
  '盟信融资',
  '人员管理',
  '企业设置'
]

const AccountCenter = {
  base: '用户中心',
  menu: [
    {
      path: "账户信息",
      icon: SupervisedUserCircle
    },
    {
      path: "交易信息",
      icon: ContactMail
    },
    {
      path: "人员管理",
      icon: WrapText
    },
    {
      path: "企业信息",
      icon: Textsms
    },
    {
      path: "个人信息",
      icon: FilterVintage
    },
    {
      path: "邀请企业",
      icon: TrackChanges
    }
  ]
};

const Management = {
  base: '盟信管理',
  menu: [
    {
      path: "签收盟信",
      icon: TrackChanges,
      component: Signing
    },
    {
      path: '可用盟信',
      icon: FilterVintage,
      component: Available
    },
  ]
};


const Financing = {
  base: '盟信融资',
  menu: [
    {
      path: "资产买入",
      icon: SupervisedUserCircle,
      component: Comp
    },
    {
      path: "已经买入资产",
      icon: ContactMail,
      component: M1,
    },
    {
      path: "资产管理",
      icon: WrapText,
      component: M1,
    },
    {
      path: "未承兑资产",
      icon: Textsms,
      component: Comp
    },
    {
      path: "已承兑资产",
      icon: FilterVintage,
      component: Comp
    },
    {
      path: "利率设置",
      icon: TrackChanges,
      component: Comp
    },
  ]
};

const Stuff = {
  base: '人员管理',
  menu: [
    {
      path: "人员管理1",
      icon: SupervisedUserCircle,
      component: StuffManagement
    },
    {
      path: '人员管理2',
      icon: ContactMail,
      component: StuffManagement
    },
    {
      path: '人员管理3',
      icon: WrapText,
      component: StuffManagement
    }
  ]
};


const Corporation = {
  base: '企业设置',
  menu: [
    {
      path: "签收盟信2",
      icon: Description
    },
    {
      path: '可用盟信',
      icon: PersonPin
    },
  ]
};


function getMenu(items) {
  const list = items.map(item => {
    const CompIcon = item.icon
    return (
      <ListItem
        button
        component={Link}
        to={`${item.path}`}
        key={item.path}
      >
        <ListItemIcon>
          <CompIcon />
        </ListItemIcon>
        <ListItemText primary={item.path} />
      </ListItem >
    )
  })
  return (
    <Fragment>
      {list}
      <ListItem>
        <Accordion />
      </ListItem>
    </Fragment>
  )
}

function getContent(items) {
  return (
    <Switch>
      {items.map(item => (
        <Route
          path={`${item.path}`}
          component={item.component}
          key={item.path}
        />
      ))
      }
    </Switch>
  )
}