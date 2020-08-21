import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Tabs,
  Tab,
  Paper, Typography, Box,
} from '@material-ui/core';
import * as Reviewer from './Reviewer'
// import { TabPanels } from '../../components'

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function () {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper className={classes.root}>
        <Tabs value={value} onChange={handleChange} aria-label="可用POC">
          <Tab label="已融资" {...a11yProps(0)} />
          <Tab label="已承兑" {...a11yProps(1)} />
          <Tab label="全部" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        已融资组件
      <Reviewer.ReviewFinancing />
      </TabPanel>
      <TabPanel value={value} index={1}>
        已承兑组件
      <Reviewer.ReviewAcceptance />
      </TabPanel>
      <TabPanel value={value} index={2}>
        全部
    </TabPanel>
    </>
  );
}
