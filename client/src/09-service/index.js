import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Link,
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { Home as HomeIcon } from '@material-ui/icons'
import faker from 'faker'
import getNavList from './navList'
import { Drawer1, footers } from '../components'
import theme from './theme'
import ServiceDemo from './demo'
import SimpleCard from './simpleCard'

import {checkLogin} from "../helpers/utils";

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
})

function Service ({auth: { token}}) {
  const classes = useStyles()
  const [data, setData] = useState([]);
  const routers = getNavList()

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        setData([faker.lorem.sentence(), faker.lorem.sentence()]);
        resolve();
      }, 2000);
    })
  }, [])

  return checkLogin(token) || (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link href="/" color="inherit" variant="h6">
              <HomeIcon />
            </Link>
            <Drawer1 />
            {routers}
          </Toolbar>
        </AppBar>
        <ServiceDemo />
        <SimpleCard data={data[0]}/>
        <SimpleCard data={data[1]}/>
        <footers.Footer2 />
      </Container>
    </ThemeProvider>
  )
}

export default connect(state => ({auth: state.auth}))(Service)
