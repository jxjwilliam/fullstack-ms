import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';
import {subRouters} from './common';
import {SetView} from '../02-core_business/common'

const PARENT_PATH = subRouters['评级限额信息'];

const Info = [
  {
    path: "客户评级与限额",
    icon: AccountCircleIcon,
    component: SetView('c3-1'),
  },
];

export const Menu3 = () => {
  const list = Info.map(item => {
    const CompIcon = item.icon;
    return (
      <ListItem button component={Link} to={`${PARENT_PATH}/${item.path}`} key={item.path}>
        <ListItemIcon>
          <CompIcon />
        </ListItemIcon>
        <ListItemText primary={item.path} />
      </ListItem>
    )
  })
  return (
    <div>
      {list}
    </div>
  );
}

export const Content3 = () => {
  return (
    <Switch>
      {Info.map(item => (
        <Route
          path={`${PARENT_PATH}/${item.path}`}
          component={item.component}
          key={item.path}
        />
      ))}
    </Switch>
  )
};