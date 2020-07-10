import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export const BASE = '/专项计划管理';

export const subRouters = [
  '计划管理',
  '参与人管理',
  '时间线管理',
  '资产/收益计划管理',
  '发行管理',
  '信息管理',
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export const getMenu = (parent_path, info) => () => {
  const list = info.map((item) => {
    const CompIcon = item.icon;
    return (
      <ListItem
        button
        component={Link}
        to={`${parent_path}/${item.path}`}
        key={item.path}
      >
        <ListItemIcon>
          <CompIcon />
        </ListItemIcon>
        <ListItemText primary={item.path} />
      </ListItem>
    );
  });
  return <div>{list}</div>;
};

export const getContent = (parent_path, info) => () => {
  return (
    <Switch>
      {info.map((item) => {
        if (item.component) {
          return (
            <Route
              path={`${parent_path}/${item.path}`}
              component={item.component}
              key={item.path}
            />
          );
        }
        return (
          <Route
            path={`${parent_path}/${item.path}`}
            render={() => <h2>{item.path}</h2>}
            key={item.path}
          />
        );
      })}
    </Switch>
  );
};
