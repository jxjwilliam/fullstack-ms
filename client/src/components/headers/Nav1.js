import React from 'react'
import { Route, Link } from 'react-router-dom'
import {List, ListItem, ListItemText,} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    displayDirection: 'row',
    flexFlow: 'row wrap',
  },
  list: {
    width: 'auto',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  item: {
    paddingLeft: theme.spacing(1),
  },
  wrap: {
    flexFlow: 'row wrap',
  },
}))

const NavList = ({ navs }) => {
  const classes = useStyles()
  const navList = navs.map(({path, title, icon: CompIcon}) => (
      <ListItem button className={classes.list} component={Link} to={path} key={path}>
        {/*<ListItemIcon>*/}
          <CompIcon fontSize="small" />
        {/*</ListItemIcon>*/}
        <ListItemText className={classes.item} primary={title} />
      </ListItem>
  ))
  return (
    <>
      <List component="nav" className={classes.root}>{navList}</List>
    </>
  )
}

const NavItem = ({ to, exact, children }) => {
  const classes = useStyles()
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <li className="nav-item">
          <Link className={match ? 'nav-link active' : 'nav-link'} to={to}>
            {children}
          </Link>
        </li>
      )}
    />
  )
}

export { NavList, NavItem }
