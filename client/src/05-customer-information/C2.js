import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  ListAlt as ListAltIcon,
} from '@material-ui/icons';
import {subRouters} from './common';
import {SetView} from '../02-core_business/common'

const PARENT_PATH = subRouters['财务信息'];

const Info = [
  {
    path: "主要财务资料",
    icon: ListAltIcon,
    component: SetView('c2-1'),
  },
];

export const Menu2 = () => {
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

export const Content2 = () => {
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