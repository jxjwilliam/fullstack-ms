import React from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Routers from './sub-routers'
import { BASE } from './common'
import { Drawer, bars } from '../components'
import { NavList, RouteList } from '../config/reusable'

const useStyles = makeStyles(theme => ({
  wrap: {
    flexFlow: 'row wrap',
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <bars.Bar2>
          <Drawer />
          <Typography>
            <Link href={BASE} color="inherit" variant="h6">风险管理</Link>
          </Typography>
          <NavList className={classes.wrap} navs={Routers} />
        </bars.Bar2>
        <div>
          <RouteList
            routes={Routers}
            redirect={{ from: BASE, to: `${BASE}/系统管理/口令更改` }}
          />
        </div>
      </Container>
    </>
  )
}
