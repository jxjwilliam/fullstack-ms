import React, {Fragment}  from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Button, Menu, MenuItem, Fade, Link} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import {Menu as MenuIcon} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({

}));

export default function ({routers=[]}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Fragment>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleOpen}>
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {routers.map(({icon:CompIcon, path, title}) => {
          return (
            <Link href={path} key={path}>
              <MenuItem onClick={handleClose}>
                <IconButton color="inherit">
                  <CompIcon fontSize="small" />
                </IconButton>
                {title}
              </MenuItem>
            </Link>
          )
        })}
      </Menu>
    </Fragment>
  );
}
