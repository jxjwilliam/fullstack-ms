import React, {Fragment}  from 'react';
import {Button, Menu, MenuItem, Fade, Link} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons'
import {GeneralRouters} from '../../routers'

export default function () {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Fragment>
    <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
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
      {GeneralRouters.map(router => {
        const CompIcon = router.icon;
        return (
          <Link href={router.path} key={router.path}>
            <MenuItem onClick={handleClose}>
              <CompIcon/>
              {router.title}
            </MenuItem>
          </Link>
        )
      })}
    </Menu>
    </Fragment>
  );
}
