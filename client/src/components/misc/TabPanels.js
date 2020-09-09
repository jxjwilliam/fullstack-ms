import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab, Typography, Box, Paper } from '@material-ui/core'

function TabPanel(props) {
  const { children, value, index, ...other } = props

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))


export default function ({ary = []}) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const TabList = ary.map((tab, idx) => (
    <Tab label={tab} {...a11yProps({ idx })} key={`${tab}_${idx}`} />
  ))

  const TabPanelList = (item) => (
    ary.map((tab, idx) => (
      <TabPanel value={item} index={idx} key={`${tab}${idx}`}>
        {tab}
      </TabPanel>
    ))
  )

  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable tabs"
        >
          {TabList}
        </Tabs>
      </Paper>
      {TabPanelList(value)}
    </>
  )
}
