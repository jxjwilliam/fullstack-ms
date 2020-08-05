import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Warning,
  CreditCard
} from '@material-ui/icons';
import {subRouters} from './common';
import {SetView} from '../02-core_business/common'
import {C4_1} from './containers'
const PARENT_PATH = subRouters['风险信息'];

const Info = [
  {
    path: "预警信息",
    icon: Warning,
    component: C4_1,
  },
  {
    path: "征信关注及不良",
    icon: CreditCard,
    // component: SetView('c4-2'),
  },
];

export const Menu4 = () => {
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

export const Content4 = () => {
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