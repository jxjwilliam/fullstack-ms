import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List, ListItem, ListItemIcon, ListItemText,
  Divider,
  IconButton,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import { BusinessRouters, GeneralRouters } from '../../routers';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function () {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {BusinessRouters.map(router => {
          const CompIcon = router.icon;
          return (
            <ListItem
              button
              component={Link}
              to={router.path}
              key={router.path}
            >
              <ListItemIcon><CompIcon /></ListItemIcon>
              <ListItemText primary={router.title} />
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <List>
        {GeneralRouters.map(router => {
          const CompIcon = router.icon;
          return (
            <ListItem
              button
              component={Link}
              to={router.path}
              key={router.path}
            >
              <ListItemIcon><CompIcon /></ListItemIcon>
              <ListItemText primary={router.title} />
            </ListItem>
          )
        })}
      </List>
    </div>
  );

  return (
    <Fragment>
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
    </Fragment>
  );
}
