import React, { Fragment } from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  Link,
} from '@material-ui/core';
import { BASE } from './config'


export default function (props) {
  console.log('TODO: ', props)
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <bars.Bar2>
          <Drawer />
          <Typography>
            <Link href={BASE} color="inherit" variant="h6">盟信融资</Link>
          </Typography>
          <NavList navs={Routers} />
        </bars.Bar2>
        <div>
          <RouteList
            routes={Routers}
            redirect={{ from: BASE, to: `${BASE}/用户中心/account-info` }}
          />
        </div>
      </Container>
    </Fragment>
  )
}
