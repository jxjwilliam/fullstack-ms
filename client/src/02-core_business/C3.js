import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  AssignmentReturned as AssignmentReturnedIcon,
  Payment as PaymentIcon,
  MergeType as MergeTypeIcon
} from '@material-ui/icons';
import { Accordion } from '../components'
import subRouters, { SetView } from './common'
import C3_1, { subRootAry1 } from './containers/C3_1';
import C3_2, { subRootAry2 } from './containers/C3_2';
import C3_3, { subRootAry3 } from './containers/C3_3';
const PARENT_PATH = subRouters['POC流转'];

const Info = [
  {
    path: "POC收支",
    icon: PaymentIcon,
    component: C3_1,
  },
  {
    path: "POC融资",
    icon: MergeTypeIcon,
    component: C3_2
  },
  {
    path: "转让回执",
    icon: AssignmentReturnedIcon,
    component: C3_3
  },
];
const view1 = SetView('m3-1-8');
const view = {};
[...subRootAry1, ...subRootAry2, ...subRootAry3].forEach((item, index) => {
  switch (item) {
    case 'POC支付':
      view[item] = SetView('m3-1-8');
      break;
    case '融资申请':
      view[item] = SetView('m3-2-1');
      break;
  }
})


export const Menu3 = () => {
  const list = Info.map((item, index) => {
    const CompIcon = item.icon;
    switch (index) {
      case 0:
        return <C3_1 key="C3_1" />;
      case 1:
        return <C3_2 key="C3_2" />;
      case 2:
        return <C3_3 key="C3_3" />;
      default:
        return (
          <ListItem button component={Link} to={`${PARENT_PATH}/${item.path}`} key={item.path}>
            <ListItemIcon>
              <CompIcon />
            </ListItemIcon>
            <ListItemText primary={item.path} />
          </ListItem>
        );
    }
  });

  return (
    <div>
      {list}
      <ListItem><Accordion /></ListItem>
    </div>
  );
};

export const Content3 = () => {
  return (
    <Switch>
      {Info.map(item => (
        <Route
          path={`${PARENT_PATH}/${item.path}`}
          component={item.component}
          key={item.path}
        />
      ))}
      {[...subRootAry1, ...subRootAry2, ...subRootAry3].map(item => {
        if (view[item]) {
          return (
            <Route
              path={`${PARENT_PATH}/${item}`}
              component={view[item]}
              key={item}
            />
          )
        } else {
          return (
            <Route
              path={`${PARENT_PATH}/${item}`}
              render={() => <h2>{item}</h2>}
              key={item}
            />
          )
        }

      })}
    </Switch>
  )
}
