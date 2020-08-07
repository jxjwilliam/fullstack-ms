import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Person,
  Description,
  FormatListBulleted,
  AssignmentTurnedIn,
  OpenInBrowser,
} from '@material-ui/icons';
import {Accordion} from '../components'
import subRouters, {SetView} from './common'
import C2_1, {subRootAry} from './containers/C2_1'
import SimpleFileUpload from '../demos/SimpleFileUpload';

const PARENT_PATH = subRouters['盟信管理'];

const Info = [
  {
    path: "我的盟信",
    icon: Person,
    component: SetView('m2-1'),
  },
  // {
  //   path: "申请单列表",
  //   icon: FormatListBulleted,
  //   component: SetView('m2-2'),
  // },
  {
    path: '盟信开具制单',
    icon: Description,
    component: SetView('m2-3'),
  },
  {
    path: '盟信开具复核',
    icon: AssignmentTurnedIn,
    component: SetView('m2-4'),
  },
  {
    path: '已开盟信',
    icon: OpenInBrowser,
  }
];

export const Menu2 = () => {
  const list = Info.map((item, index) => {
    const CompIcon = item.icon;
    return index === 3 ? <C2_1 key="C2_1"/> : (
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
      <ListItem><Accordion/></ListItem>
    </div>
  );
};

const newAry = subRootAry.map(s => ({
  path: s,
  component: SimpleFileUpload,
}));

export const Content2 = () => {
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
      })}
      {newAry.map(item => {
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
              key={item}
            />
          )
        }
      })}
    </Switch>
  )
};
