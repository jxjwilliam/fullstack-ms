import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from '@material-ui/core';
import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
  Folder as FolderIcon,
} from '@material-ui/icons';

import {version} from '../../../package.json';

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 'auto',
  },
});

export default function () {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="关于我们" value="关于我们" icon={<RestoreIcon />}/>
      <BottomNavigationAction label="联系我们" value="联系我们" icon={<FavoriteIcon />}/>
      <BottomNavigationAction label="服务选项" value="服务选项" icon={<LocationOnIcon />}/>
      <BottomNavigationAction label="市场" value="市场" icon={<FolderIcon />}/>
    </BottomNavigation>
    <Box color="primary.main">
      <Typography component="p">
        &copy;William Jiang 2019, version: {version}, all rights reserved.
      </Typography>
    </Box>
    </>
  );
}
