import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Description,
  PersonPin,
} from '@material-ui/icons';
import Accordion from '../components/Accordion'
import subRouters from './common';

const PARENT_PATH = subRouters['企业设置'];

const Info = [
  {
    path: "签收盟信2",
    icon: Description
  },
  {
    path: '可用盟信',
    icon: PersonPin
  },
];

export const Menu5 = () => {
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
      <ListItem>
        <Accordion/>
      </ListItem>
    </div>
  );
}

export const Content5 = () => {
  return (
    <Switch>
      {Info.map(item => (
        <Route path={`${PARENT_PATH}/${item.path}`} render={() => <h2>{item.title}</h2>} key={item.path}/>
      ))
      }
    </Switch>
  )
}
