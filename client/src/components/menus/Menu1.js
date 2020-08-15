import React, {Fragment}  from 'react';
import {fade, makeStyles} from '@material-ui/core/styles'
import {Menu, MenuItem, Fade, Link, Button, IconButton} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  link: {
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      textDecoration: 'none',
    },
  },
  icon: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(5)
  },
}));

export default function ({routers=[], Icon=MenuIcon, title=''}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const renderMenu = (
    <Menu
      id="profile-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      {routers.map(({icon:CompIcon, path, title: subTitle}) => {
        return (
          <Link href={path} key={path} className={classes.link}>
            <MenuItem onClick={handleClose} className={classes.icon}>
              { CompIcon ? (
                <IconButton color="inherit">
                  <CompIcon fontSize="small" />
                </IconButton>
              ) : null }
              {subTitle}
            </MenuItem>
          </Link>
        )
      })}
    </Menu>
  )

  return (
    <Fragment>
      <Button
        variant='contained'
        onClick={handleOpen}
        color="primary"
        startIcon={<Icon />}
      >
        {title}
      </Button>
      {renderMenu}
    </Fragment>
  );
}
