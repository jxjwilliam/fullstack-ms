import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Tabs,
  Tab,
  Paper,
} from '@material-ui/core';
import {Reviewer} from '../../demos/Review'
import TabPanel from '../../components/TabPanel'

// 签收处理，参见铁建的优酷视频。
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
      <Tabs value={value} onChange={handleChange} aria-label="签收盟信">
        <Tab label="代签收" {...a11yProps(0)} />
        <Tab label="已签收" {...a11yProps(1)} />
        <Tab label="全部" {...a11yProps(2)} />
      </Tabs>
    </Paper>
    <TabPanel value={value} index={0}>
      代签收组件
      <Reviewer.ReviewAvailable/>
    </TabPanel>
    <TabPanel value={value} index={1}>
      已签收组件
      <Reviewer.ReviewSigned />
    </TabPanel>
    <TabPanel value={value} index={2}>
      全部
    </TabPanel>
    </>
  );
}
