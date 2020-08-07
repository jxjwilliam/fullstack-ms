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
import Accordion from '../components/Accordion'
import subRouters from './common'
import {C2_1} from './containers'

const PARENT_PATH = subRouters['盟信管理'];

const Info = [
  {
    path: "我的盟信",
    icon: BarChartIcon
  },
  {
    path: '盟信开具制单',
    icon: LayersIcon
  },
  {
    path: '盟信开具复核',
    icon: PeopleIcon
  },
  {
    path: '已开盟信',
    icon: PeopleIcon,
    component: C2_1,
  }
];

export const Menu2 = () => {
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

export const Content2 = () => {
  return (
    <Switch>
      {Info.map(item => {
        if (item.component) {
          return (
            <Route path={`${PARENT_PATH}/${item.path}`} component={item.component} key={item.path}/>
          )
        }
        else {
          return (
            <Route path={`${PARENT_PATH}/${item.path}`} render={() => <h2>{item.path}</h2>} key={item.path}/>
          )
        }
      })
      }
    </Switch>
  )
}