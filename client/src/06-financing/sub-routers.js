import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, } from '@material-ui/core';
import {
  ContactSupport,
  Shop,
  Apps,
  People,
  SupervisedUserCircle,
  ContactMail,
  WrapText,
  Textsms,
  FilterVintage,
  TrackChanges,
  Description,
  PersonPin,
} from '@material-ui/icons';
import { Layout } from '../components'
import { FTemplate, CTemplate } from '../containers'

export const BASE = '/financing';

const NavList = [
  {
    path: '用户中心',
    icon: People,
  },
  {
    path: 'POC管理',
    icon: Apps,
  },
  {
    path: 'POC融资',
    icon: Shop
  },
  {
    path: '人员管理',
    icon: ContactSupport
  },
  {
    path: '企业设置',
    icon: SupervisedUserCircle
  },
]

const MenuList = [
  {
    nav: '用户中心',
    main: [
      {
        path: "账户信息",
        icon: SupervisedUserCircle,
      },
      {
        path: "交易信息",
        icon: ContactMail,
      },
      {
        path: "人员管理",
        icon: WrapText,
      },
      {
        path: "企业信息",
        icon: Textsms,
      },
      {
        path: "个人信息",
        icon: FilterVintage,
      },
      {
        path: "邀请企业",
        icon: TrackChanges,
      },
    ]
  },
  {
    nav: 'POC管理',
    main: [
      {
        path: "签收POC",
        icon: TrackChanges,
      },
      {
        path: "可用POC",
        icon: FilterVintage,
      },
    ]
  },
  {
    nav: 'POC融资',
    main: [
      {
        path: "资产买入",
        icon: SupervisedUserCircle,
      },
      {
        path: "已经买入资产",
        icon: ContactMail,
      },
      {
        path: "资产管理",
        icon: WrapText,
      },
      {
        path: "未承兑资产",
        icon: Textsms,
      },
      {
        path: "已承兑资产",
        icon: FilterVintage,
      },
      {
        path: "利率设置",
        icon: TrackChanges,
      },
    ]
  },
  {
    nav: '人员管理',
    main: [
      {
        path: "人员管理1",
        icon: SupervisedUserCircle,
      },
      {
        path: "人员管理2",
        icon: ContactMail,
      },
      {
        path: "人员管理3",
        icon: WrapText,
      },
    ]
  },
  {
    nav: '企业设置',
    main: [
      {
        path: "签收POC",
        icon: Description,
      },
      {
        path: "可用POC",
        icon: PersonPin,
      },
    ]
  },
]

const Config = [
  ['用户中心', ["账户信息", "交易信息", "人员管理", "企业信息", "个人信息", "邀请企业"]],
  ['POC管理', ["签收POC", "可用POC"]],
  ['POC融资', ["资产买入", "已经买入资产", "资产管理", "未承兑资产", "已承兑资产", "利率设置"]],
  ['人员管理', ["人员管理1", "人员管理2", "人员管理3"]],
  ['企业设置', ["签收POC2", "可用POC"]],
];

const MainIcons = [People, Apps, Shop, ContactSupport, SupervisedUserCircle]

const SubIcons = [
  [SupervisedUserCircle, ContactMail, WrapText, Textsms, FilterVintage, TrackChanges,],
  [TrackChanges, FilterVintage],
  [SupervisedUserCircle, ContactMail, WrapText, Textsms, FilterVintage, TrackChanges],
  [SupervisedUserCircle, ContactMail, WrapText],
  [Description, PersonPin],
]

function getSubRouters(inx, value) {
  const subIcon = SubIcons[inx];
  return value.reduce((acc, cur, idx) => ([...acc, {
    path: cur,
    icon: subIcon[idx],
  }]), [])
}

function getMenu(key, items) {
  function menu() {
    const list = items.map(item => {
      const CompIcon = item.icon
      return (
        <ListItem
          button
          component={Link}
          to={`${BASE}/${key}/${item.path}`}
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
      </Fragment>
    )
  }
  return menu;
}

function getContent(key, items) {
  return function () {
    return (
      <Switch>
        {items.map(item => {
          const { path } = item;
          const url = `${BASE}/${key}/${path}`
          return (
            <Route
              path={url}
              // component={item.component}
              render={FTemplate}
              key={item.path}
            />
          )
        })}
      </Switch>
    )
  }
}

export default (function () {
  return Config.map(([key, value], idx) => {
    const subAry = getSubRouters(idx, value);
    const Menu = getMenu(key, subAry);
    const Content = getContent(key, subAry);
    return {
      path: `${BASE}/${key}`,
      title: key,
      icon: MainIcons[idx],
      component: Layout(Menu, Content)
    }
  })
}.call())
