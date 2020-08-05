import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import {
  FilterVintage,
  TrackChanges,
  Description,
  PersonPin,
  ExpandLess,
  ExpandMore,
  StarBorder
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const getSubRouters = (ppath, path, ary) => () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const icons = [
    FilterVintage,
    TrackChanges,
    Description,
    PersonPin,
  ];

  const getSubItems = () => {
    return ary.map((item, inx) => {
      const Icon = icons[inx] || Description;
      return (
        <ListItem
          button
          component={Link}
          to={`${ppath}/${item}`}
          className={classes.nested}
          key={item}
        >
          <ListItemIcon>
            <Icon/>
          </ListItemIcon>
          <ListItemText primary={item}/>
        </ListItem>
      )
    });
  };

  return (
    <>
    <ListItem
      button
      key={path}
      onClick={handleClick}>
      <ListItemIcon>
        <StarBorder/>
      </ListItemIcon>
      <ListItemText primary={path}/>
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {getSubItems()}
      </List>
    </Collapse>
    </>
  );
}

export default getSubRouters;