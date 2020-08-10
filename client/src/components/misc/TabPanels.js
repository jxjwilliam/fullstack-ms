import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab,   Typography, Box, Paper,} from '@material-ui/core';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`available-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={6}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function (props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ary = props.ary || [];

  const TabList = ary.map((tab, inx) => (
    <Tab label={tab} {...a11yProps({ inx })} key={`${tab}_${inx}`} />
  ))

  const TabPanelList = value => ary.map((tab, inx) => (
    <TabPanel value={value} index={inx} key={`${tab}${inx}`}>
      {tab}
    </TabPanel>
  ))

  return (
    <>
      <Paper className={classes.root}>
        <Tabs value={value} onChange={handleChange} aria-label="可用POC">
          {TabList}
        </Tabs>
      </Paper>
      {TabPanelList(value)}
    </>
  );
}
