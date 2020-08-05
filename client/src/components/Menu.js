import React from 'react';
import {Button, Menu, MenuItem, Fade, Link} from '@material-ui/core';
import {GeneralRouters} from '../routers'
import {Menu as MenuIcon} from '@material-ui/icons'

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
    <>
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
            <MenuItem onClick={handleClose}><CompIcon/>{router.title}</MenuItem>
          </Link>
        )
      })}
    </Menu>
    </>
  );
}
