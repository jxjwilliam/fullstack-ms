import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  SupervisedUserCircle,
  ContactMail,
  WrapText,
  Textsms,
  FilterVintage,
  TrackChanges,
  Description,
} from '@material-ui/icons';
import {M1} from './containers/';
import subRouters from './common';

const PARENT_PATH = subRouters.盟信融资;

const Comp = () => <h1>融资，分转</h1>

const BuySellInfo = [
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
];

export const Menu3 = () => {
  const list = BuySellInfo.map(item => {
    const CompIcon = item.icon;
    return (
      <ListItem button component={Link} to={`${PARENT_PATH}/${item.path}`} key={item.path}>
        <ListItemIcon>
          <CompIcon />
        </ListItemIcon>
        <ListItemText primary={item.path}/>
      </ListItem>
    )
  });

  return (
    <div>
      {list}
    </div>
  );
}

export const Content3 = () => {
  return (
    <Switch>
      {BuySellInfo.map(item => {
        const Comp = item.component;
        return (
          <Route path={`${PARENT_PATH}/${item.path}`} render={() => <Comp/>} key={item.path}/>
        )
      })}
    </Switch>
  )
}
