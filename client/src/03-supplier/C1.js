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
import subRouters from './common';

const PARENT_PATH = subRouters['盟信额度'];

const Info = [
  {
    path: "额度查询",
    icon: BarChartIcon
  },
  {
    path: "额度分配（发起额度分配流程）",
    icon: LayersIcon
  },
  {
    path: "额度变更（发起额度变更流程）",
    icon: PeopleIcon
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

export const Content1 = () => {
  return (
    <Switch>
      {Info.map(item => (
        <Route path={`${PARENT_PATH}/${item.path}`} render={() => <h2>{item.path}</h2>} key={item.path}/>
      ))}
    </Switch>
  )
}
