import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Tabs,
  Tab,
  Paper,
} from '@material-ui/core';
import TabPanel from '../../components/TabPanel'


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

export default function (props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ary = props.ary || [];

  const TabList = ary.map((tab, inx) => (
    <Tab label={tab} {...a11yProps({inx})} key={`${tab}_${inx}`}/>
  ));

  const TabPanelList = value => ary.map((tab, inx) => (
    <TabPanel value={value} index={inx} key={`${tab}${inx}`}>
      {tab}
    </TabPanel>
  ));

  return (
    <>
    <Paper className={classes.root}>
      <Tabs value={value} onChange={handleChange} aria-label="可用盟信">
        {TabList}
      </Tabs>
    </Paper>
    {TabPanelList(value)}
    </>
  );
}
