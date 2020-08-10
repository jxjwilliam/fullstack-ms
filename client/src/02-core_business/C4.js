import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  VerifiedUser as VerifiedUserIcon,
  MoneyOff as MoneyOffIcon,
  Money as MoneyIcon
} from '@material-ui/icons';
import subRouters, {SetView} from './common'

const PARENT_PATH = subRouters['还款管理'];

const Info = [
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
];

export const Menu4 = () => {
  const list = Info.map(item => {
    const CompIcon = item.icon;
    return (
      <ListItem
        button
        component={Link}
        to={`${PARENT_PATH}/${item.path}`}
        key={item.path}>
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
