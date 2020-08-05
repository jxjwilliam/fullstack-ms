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
} from '@material-ui/icons';
import {StuffManagement} from '../demos/Review'
import Accordion from '../components/Accordion'
import subRouters from './common';

const PARENT_PATH = subRouters['人员管理'];

const StuffInfo = [
  {
    path: "人员管理1",
    icon: SupervisedUserCircle,
    component: StuffManagement
  },
  {
    path: '人员管理2',
    icon: ContactMail,
    component: StuffManagement
  },
  {
    path: '人员管理3',
    icon: WrapText,
    component: StuffManagement
  }
];

export const Menu4 = () => {
  const list = StuffInfo.map(item => {
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

export const Content4 = () => {
  return (
    <Switch>
      {StuffInfo.map(item => (
        <Route path={`${PARENT_PATH}/${item.path}`} key={item.path} component={item.component}/>
      ))}
    </Switch>
  )
}
