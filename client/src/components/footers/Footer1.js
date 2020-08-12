import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from '@material-ui/core';
import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
  Folder as FolderIcon,
} from '@material-ui/icons';
import {Copyright} from '../misc'

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 'auto',
  },
});

export default function ({services}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  services = services || [
    {
      label: '关于我们',
      value: '关于我们',
      icon: RestoreIcon,
    },
    {
      label: '联系我们',
      value: '联系我们',
      icon: FavoriteIcon,
    },
    {
      label: '服务选项',
      value: '服务选项',
      icon: LocationOnIcon,
    },
    {
      label: '市场',
      value: '市场',
      icon: FolderIcon,
    },
  ].map(({label, value, icon: Icon}) => (
    <BottomNavigationAction label={label} value={value} icon={<Icon />} key={label}/>
  ))

  return (
    <>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      {services}
    </BottomNavigation>
    <Box color="primary.main">
      <Copyright opt={'body1'} />
    </Box>
    </>
  );
}
