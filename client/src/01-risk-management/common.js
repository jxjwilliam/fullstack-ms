import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

export const BASE = '/风险管理';

export const subRouters = [
  '系统管理',
  '客户信息',
  '评级限额',
  '授信审批',
  '额度管理',
  '盟信',
  '贷后管理',
  '还款',
  '运营管理',
  '流程管理',
  '参数配置'
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export const getMenu = (parent_path, info) => () => {
  const list = info.map(item => {
    const CompIcon = item.icon;
    return (
      <ListItem button component={Link} to={`${parent_path}/${item.path}`} key={item.path}>
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
};

export const getContent = (parent_path, info) => () => {
  return (
    <Switch>
      {info.map(item => {
        if (item.component) {
          return (
            <Route
              path={`${parent_path}/${item.path}`}
              component={item.component}
              key={item.path}
            />
          )
        }
        else {
          return (
            <Route
              path={`${parent_path}/${item.path}`}
              render={() => <h2>{item.path}</h2>}
              key={item.path}
            />
          )
        }
      })}
    </Switch>
  )
};

export const mock = [
  'r2-1',
  'r2-2',
  'r2-3',
  'r2-4',
  'r2-5-2',
  'r2-5',
  'r2-5-1',
  'r2-5-3',
  'r2-5-4',
  'r3-1-1',
  'r3-1-2',
  'r3-1-3',
  'r3-1-4',
  'r3-1-5',
  'r3-1-6',
  'r3-1-7',
  'r3-1-8',
  'r3-2-1',
  'r3-2-2',
  'r3-2-3',
  'r3-2-4',
  'r3-2-5',
  'r3-3-1',
  'r3-3-2',
  'r4-1',
  'r4-2',
  'r4-3',
];
