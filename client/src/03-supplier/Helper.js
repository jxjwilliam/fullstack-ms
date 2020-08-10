import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {modals, dialogs} from '../components'
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
import subRouters from './common';

const PARENT_PATH = '帮助'];

const HelperInfo = [
  {
    path: '帮助中心',
    icon: BarChartIcon,
    component: dialogs.Dialog2,
  },
  {
    path: '公司简介',
    icon: PeopleIcon,
    component: dialogs.Dialog1,
  },
  {
    path: '注册指导',
    icon: LayersIcon,
    component: modals.Modal1,
  },
];

export const HelpMenu = () => {
  const list = HelperInfo.map(item => {
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

export const HelpContent = () => {
  return (
    <Switch>
      {HelperInfo.map(item => (
        <Route
          path={`${PARENT_PATH}/${item.path}`}
          component={item.component}
          key={item.path}/>
      ))}
    </Switch>
  )
}
