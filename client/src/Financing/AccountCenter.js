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
} from '@material-ui/icons';
import subRouters from './common';

const PARENT_PATH = subRouters['用户中心'];

const AccountCenterInfo = [
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
];

export const Menu1 = () => {
  const list = AccountCenterInfo.map(item => {
    const CompIcon = item.icon;
    return (
      <ListItem button component={Link} to={`${PARENT_PATH}/${item.path}`} key={item.path}>
        <ListItemIcon>
          <CompIcon />
        </ListItemIcon>
        <ListItemText primary={item.path}/>
      </ListItem>
    )
  })
  return (
    <div>
      {list}
    </div>
  );
}

export const Content1 = () => {
  return (
    <Switch>
      {AccountCenterInfo.map(item => (
        <Route path={`${PARENT_PATH}/${item.path}`} render={() => <h2>{item.path}</h2>} key={item.path}/>
      ))}
    </Switch>
  )
}
