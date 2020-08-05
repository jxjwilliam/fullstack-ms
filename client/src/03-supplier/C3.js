import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon
} from '@material-ui/icons';
import subRouters from './common'
import {C3_1, C3_2, C3_3} from './containers'

const PARENT_PATH = subRouters['盟信流转'];

const Info = [
  {
    path: "盟信收支",
    icon: BarChartIcon,
    component: C3_1,
  },
  {
    path: "盟信融资",
    icon: LayersIcon,
    component: C3_2
  },
  {
    path: "转让回执",
    icon: PeopleIcon,
    component: C3_3
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
      {Info.map(item => (
        <Route
          path={`${PARENT_PATH}/${item.path}`}
          component={item.component}
          key={item.path}
        />
      ))
      }
    </Switch>
  )
}
