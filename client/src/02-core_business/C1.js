import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  ChangeHistory as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon
} from '@material-ui/icons';
import { Accordion } from '../components'
import subRouters, { SetView } from './common';

const PARENT_PATH = subRouters['POC额度'];

const Info = [
  {
    path: "额度查询",
    icon: BarChartIcon,
    component: SetView('m1'),
  },
];

export const Menu1 = () => {
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
      <ListItem><Accordion /></ListItem>
    </div>
  );
};

// render={() => <h2>{item.path}</h2>}
export const Content1 = () => {
  return (
    <Switch>
      {Info.map(item => (
        <Route
          path={`${PARENT_PATH}/${item.path}`}
          component={item.component}
          key={item.path} />
      ))}
    </Switch>
  )
}
