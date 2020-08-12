import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import {
  Container,
  List, ListItem, ListItemIcon, ListItemText,
  Typography,
  Link as MuiLink,
} from '@material-ui/core';
import { bars, Drawer } from "../index";
import { NavList } from '../headers'
import Layout1 from './Layout1'
import {isEmpty} from '../../helpers/utils'

function FTemplate({ match: { path, url } }) {
  const breadcrumbs = path.substr(1).split('/').join(' 👉🏻 ');
  console.log(JSON.stringify(url, null, 4));
  return <h2>{`${breadcrumbs} : `}</h2>
}

class CTemplate extends Component {
  render() {
    const { match: { path, url } } = this.props;
    const breadcrumbs = path.substr(1).split('/').join(' 👉🏻 ');
    return <h2>{`${breadcrumbs} : `}</h2>
  }
}

// title (optional), path, icon
function getMenu(parent_path, items) {
  return function () {
    const list = items.map(({ path, title = '', icon: CompIcon }) => (
      <ListItem button component={Link} to={`${parent_path}/${path}`} key={path}>
        <ListItemIcon>
          <CompIcon />
        </ListItemIcon>
        <ListItemText primary={title || path} />
      </ListItem >
    ))
    return <List>{list}</List>
  }
}


// path, component/render
function getContent(parent_path, items) {
  return function () {
    return (
      <Switch>
        {items.map(({ path, component }) => {
          const url = `${parent_path}/${path}`;
          if (component) return <Route path={url} component={component} key={path} />
          return <Route path={url} render={FTemplate} key={path} />
        })}
      </Switch>
    )
  }
}

function getNavs(baseUrl, navList) {
  return navList.map(({path, icon}) => ({
    path: `/${baseUrl}/${path}`,
    title: path,
    icon: icon
  }))
}

function getAllRouters(navList, mainList, baseUrl) {
  return navList.map(({ path, icon }, idx) => {
    const subAry = mainList.find(item => item.nav === path).main
    const parent_url = `/${baseUrl}/${path}`
    const Menu = getMenu(parent_url, subAry)
    const Content = getContent(parent_url, subAry)
    return {
      title: path,
      icon: icon,
      path: parent_url,
      component: Layout1(Menu, Content)
    }
  })
}

const RouteList = ({routes, redirect = {}}) => {
  return (
    <Switch>
      {!isEmpty(redirect) ?
        <Redirect
          exact
          from={redirect.from}
          to={redirect.to}
        /> : null};
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
      />))}
    </Switch>
  )
};

/**
 * title：'融资'，url：'/financing'
 */
const getPageLayout = (navList, mainList, options) => {
  const { base, redirect } = options;
  const navs = getNavs(base, navList);
  const routers = getAllRouters(navList, mainList, base)
  console.log('------', routers)

  return (
    <Container fixed>
      <bars.Bar2>
        <Drawer />
        <Typography>
          <MuiLink href={base} color="inherit" variant="h6">{base}</MuiLink>
        </Typography>
        <NavList navs={navs} />
      </bars.Bar2>
      <Fragment>
        <RouteList
          routes={routers}
          redirect={{ from: base, to: redirect }}
        />
      </Fragment>
    </Container>
  )
}

export {
  getPageLayout
}
