import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Layers as LayersIcon
} from '@material-ui/icons';
import Accordion from '../components/Accordion'
import subRouters from './common'

const PARENT_PATH = subRouters['还款管理'];

const Info = [
  {
    path: "代还款",
    icon: BarChartIcon,
  },
  {
    path: '还款审批',
    icon: LayersIcon,
  },
  {
    path: '已还款',
    icon: LayersIcon,
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
      <ListItem>
        <Accordion/>
      </ListItem>
    </div>
  );
}

export const Content4 = () => {
  return (
    <Switch>
      {Info.map(item => {
        const Comp = item.component;
        return (
          <Route path={`${PARENT_PATH}/${item.path}`} render={() => <h2>{item.path}</h2>} key={item.path}/>
        )
      })}
    </Switch>
  )
}
