import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

import { BusinessRouters, GeneralRouters } from '../../routers'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  active: {
    backgroundColor: '#dce775',
  },
})

export default function () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [side]: open })
  }

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {BusinessRouters.map(({ icon: CompIcon, path, title }) => (
          <ListItem
            button
            // selected={path === location.pathname}
            component={NavLink}
            exact
            to={path}
            activeClassName={classes.active}
            key={path}
          >
            <ListItemIcon>
              <CompIcon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {GeneralRouters.map(({ icon: CompIcon, path, title }) => (
          <ListItem
            button
            component={NavLink}
            exact
            to={path}
            activeClassName={classes.active}
            key={path}
          >
            <ListItemIcon>
              <CompIcon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer('right', true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {sideList('right')}
      </Drawer>
    </>
  )
}
