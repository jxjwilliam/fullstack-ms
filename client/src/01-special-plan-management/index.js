import React, { Fragment } from 'react'
import { Container, CssBaseline, Typography, Link } from '@material-ui/core'
import Routers from './sub-routers'
import { BASE } from './common'
import { Drawer, bars } from '../components'
import { NavList, RouteList } from '../helpers/reusable'

export default function ({ title, path }) {
  console.log(Routers, BASE, title, path)
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <bars.Bar2>
          <Drawer />
          <Typography>
            <Link href={BASE} color="inherit" variant="h6">
              {title}
            </Link>
          </Typography>
          <NavList navs={Routers} />
        </bars.Bar2>
        <div>
          <RouteList
            routes={Routers}
            redirect={{ from: BASE, to: `${BASE}/系统管理/口令更改` }}
          />
        </div>
      </Container>
    </Fragment>
  )
}
