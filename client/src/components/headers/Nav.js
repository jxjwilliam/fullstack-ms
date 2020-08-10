import React, { Component, Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    displayDirection: 'row',
    flexFlow: 'row wrap',
  },
  list: {
    width: 'auto',
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  item: {
    paddingLeft: theme.spacing(2),
  },
  wrap: {
    flexFlow: 'row wrap',
  },
}))

const NavList = ({ navs }) => {
  const classes = useStyles()
  const navList = navs.map((router) => {
    const CompIcon = router.icon
    return (
      <ListItem
        className={classes.list}
        button
        component={Link}
        to={router.path}
        key={router.path}
      >
        <ListItemIcon />
        <CompIcon fontSize="small" />
        <ListItemText className={classes.item} primary={router.title} />
      </ListItem>
    )
  })
  return (
    <>
      <List className={classes.root}>{navList}</List>
    </>
  )
}

const NavItem = ({ to, exact, children }) => (
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

// React.cloneElement(View, {table: collection});
// <View table={collection} />
const setHOCView = (Comp) => (collection) => class extends Component {
  render() {
    return <Comp table={collection} {...this.props} />
  }
}

export { NavList, NavItem, setHOCView }
