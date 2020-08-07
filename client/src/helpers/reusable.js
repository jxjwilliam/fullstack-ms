import React from 'react';
import { Route, Switch, NavLink, Redirect, Link } from 'react-router-dom'
import {
  ListItem, ListItemText, Typography, Link as ALink,
  Grid, Card, CardMedia,
} from '@material-ui/core';
import jwt_decode from 'jwt-decode'
import isEmpty from 'lodash/isEmpty';

export const NavList = ({ navs }) => {
  const navList = navs.map(router => {
    const CompIcon = router.icon;
    return (
      <ListItem
        style={{ width: 'auto', paddingTop: '4px', paddingBottom: '4px' }}
        button
        component={Link}
        to={router.path}
        key={router.path}
      >
        <CompIcon fontSize="small" />
        <ListItemText style={{ paddingLeft: '8px' }} primary={router.title} />
      </ListItem>
    )
  });
  return (
    <div className="listNavigator">
      <ul style={{ display: 'flex', displayDirection: 'row', flexFlow: 'row wrap' }}>
        {navList}
      </ul>
    </div>
  )
};

export const RouteList = ({ routes, redirect = {} }) => {
  return (
    <Switch>
      {!isEmpty(redirect) ?
        <Redirect
          exact
          from={redirect.from}
          to={redirect.to}
        /> : null};
      {routes.map(route => <Route
        key={route.path}
        path={route.path}
        component={route.component}
      />)}
    </Switch>
  )
}

export const loginInfos = () => {
  let loginInfo = {};
  const token = sessionStorage.getItem('authToken');
  if (token) {
    loginInfo = jwt_decode(token);
  }
  return loginInfo;
}