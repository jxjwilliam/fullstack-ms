import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
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
import Accordion from '../components/Accordion'
import Layout from '../components/Layout'

export const BASE = '/financing';

const tmpRender = ({match: {path, url}}) => {
  const breadcrumbs = path.substr(1).split('/').join(' 👉🏻 ');
  console.log(JSON.stringify(url, null, 4));
  return <h2>{`${breadcrumbs} : `}</h2>
}

const Config = [
  ['用户中心', ["账户信息", "交易信息", "人员管理", "企业信息", "个人信息", "邀请企业"]],
  ['盟信管理', ["签收盟信", "可用盟信"]],
  ['盟信融资', ["资产买入", "已经买入资产", "资产管理", "未承兑资产", "已承兑资产", "利率设置"]],
  ['人员管理', ["人员管理1", "人员管理2", "人员管理3"]],
  ['企业设置', ["签收盟信2", "可用盟信"]],
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

function getMenu (key, items) {
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
        <ListItem>
          <Accordion />
        </ListItem>
      </Fragment>
    )
  }
  return menu;
}

function getContent (key, items) {
  return function() {
    return (
      <Switch>
        {items.map(item => {
          const {path} = item;
          const url = `${BASE}/${key}/${path}`
          return (
            <Route
              path={url}
              // component={item.component}
              render={ tmpRender }
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
