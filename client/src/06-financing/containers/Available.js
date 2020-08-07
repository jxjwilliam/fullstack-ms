import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Tabs,
  Tab,
  Paper,
} from '@material-ui/core';
import {Reviewer} from '../../demos/Review'
import {TabPanel} from '../../components'


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
      <Tabs value={value} onChange={handleChange} aria-label="可用盟信">
        <Tab label="已融资" {...a11yProps(0)} />
        <Tab label="已承兑" {...a11yProps(1)} />
        <Tab label="全部" {...a11yProps(2)} />
      </Tabs>
    </Paper>
    <TabPanel value={value} index={0}>
      已融资组件
      <Reviewer.ReviewFinancing/>
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
