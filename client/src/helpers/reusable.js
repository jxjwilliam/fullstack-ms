import React from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import {isEmpty} from '@williamjiang/util'

// reusable for 01 - 06 folders.
//  <Icon>{router.icon}</Icon>
export const NavList = ({ navs }) => {
  const navList = navs.map(router => {
    const CompIcon = router.icon
    return (
      <li key={router.path}>
        <NavLink
          activeStyle={{ color: 'red' }}
          className="flex-container-link"
          to={router.path}
        >
          <CompIcon />
          {router.title}
        </NavLink>
      </li>
    )
  })
  return (
    <div className="navigator">
      <ul>{navList}</ul>
    </div>
  )
}

export const RouteList = ({ routes, redirect = {} }) => {
  return (
    <Switch>
      {!isEmpty(redirect) ? (
        <Redirect exact from={redirect.from} to={redirect.to} />
      ) : null}
      ;
      {routes.map(route => (
        <Route key={route.path} path={route.path} component={route.component} />
      ))}
    </Switch>
  )
}
