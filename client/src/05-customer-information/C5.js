import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Toc,
  LocationCity
} from '@material-ui/icons';
import {subRouters} from './common';
import {SetView} from '../02-core_business/common'

const PARENT_PATH = subRouters['关联信息'];

const Info = [
  {
    path: "关联关系信息",
    icon: Toc,
    // component: SetView('c5-1'),
  },
  {
    path: "上下游企业",
    icon: LocationCity,
    // component: SetView('c5-2'),
  },
];

export const Menu5 = () => {
  const list = Info.map(item => {
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

export const Content5 = () => {
  return (
    <Switch>
      {Info.map(item => {
        if (item.component) {
          return (
            <Route
              path={`${PARENT_PATH}/${item.path}`}
              component={item.component}
              key={item.path}
            />
          )
        }
        else {
          return (
            <Route
              path={`${PARENT_PATH}/${item.path}`}
              render={() => <h2>{item.path}</h2>}
              key={item.path}
            />
          )
        }
      })
      }
    </Switch>
  )
};
