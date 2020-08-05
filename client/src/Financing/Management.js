import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  FilterVintage,
  TrackChanges,
} from '@material-ui/icons';
import {M1, Available, Signing} from './containers'
import Accordion from '../components/Accordion'
import subRouters from './common';

const PARENT_PATH = subRouters.盟信管理;

const ManagementInfo = [
  {
    path: "签收盟信",
    icon: TrackChanges,
    component: Signing
  },
  {
    path: '可用盟信',
    icon: FilterVintage,
    component: Available
  },
];

export const Menu2 = () => {
  const list = ManagementInfo.map(item => {
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
      <ListItem>
        <Accordion/>
      </ListItem>
    </div>
  );
}

export const Content2 = () => {
  return (
    <Switch>
      {ManagementInfo.map(item => (
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
