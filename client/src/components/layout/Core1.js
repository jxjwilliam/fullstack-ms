import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import {
  Container,
  List, ListItem, ListItemIcon, ListItemText,
  Typography,
  Link as MuiLink,
} from '@material-ui/core';
import { isEmpty } from "../../helpers/utils";
import { bars, Drawer } from "../index";
import { NavList } from '../headers'
import { FTemplate, CTemplate} from '../../containers'

const RouteList = ({ routes, redirect = {} }) => {
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


// React.cloneElement(View, {table: collection});
// <View table={collection} />
const setHOCView = Comp => collection => {
  return class extends Component {
    render() {
      return <Comp table={collection} {...this.props} />
    }
  }
}

// title, path, icon
function getMenu(parent_path, items) {
  return function () {
    const list = items.map(({ title, path, icon: CompIcon }) => (
      <ListItem button component={Link} to={`${parent_path}/${path}`} key={path}>
        <ListItemIcon>
          <CompIcon/>
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem >
    ))
    return <List component="nav" >{list}</List>
  }
}


// path, component/render
function getContent(parent_path, items) {
  return function () {
    return (
      <Switch>
        {items.map(({ path, component }) => {
          if (component) return <Route path={`${parent_path}/${path}`} component={component} key={path} />
          return <Route path={`${parent_path}/${path}`} render={FTemplate} key={path} />
        })}
      </Switch>
    )
  }
}

const getPageLayout = (title, url, redirect, routers) => {
  return (
    <Container fixed>
      <bars.Bar2>
        <Drawer />
        <Typography>
          <MuiLink href={url} color="inherit" variant="h6">{title}</MuiLink>
        </Typography>
        <NavList navs={routers} />
      </bars.Bar2>
      <Fragment>
        <RouteList
          routes={routers}
          redirect={{ from: url, to: redirect }}
        />
      </Fragment>
    </Container>
  )
}

export {
  RouteList,
  setHOCView,
  getMenu,
  getContent,
  getPageLayout
}
