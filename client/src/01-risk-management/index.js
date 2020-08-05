import React from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  Link,
} from '@material-ui/core';
import Routers from './sub-routers'
import {BASE} from './common'
import {Drawer, bars} from '../components'
import {NavList, RouteList} from '../config/reusable'

export default function () {
  return (
    <>
    <CssBaseline/>
    <Container fixed>
      <bars.Bar2>
        <Drawer/>
        <Typography>
          <Link href={BASE} color="inherit" variant="h6">风险管理</Link>
        </Typography>
        <NavList navs={Routers}/>
      </bars.Bar2>
      <div>
        <RouteList
          routes={Routers}
          redirect={{from: BASE, to: `${BASE}/系统管理/口令更改`}}
        />
      </div>
    </Container>
    </>
  )
}
