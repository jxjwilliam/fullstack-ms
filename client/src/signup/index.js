import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Container,
  CssBaseline
} from '@material-ui/core';
import { Drawer1, bars } from '../components'
import Signup1 from './Signup1'
import Signup2 from './signup2'

const Routers = [
  {
    path: '/signup/供应商',
    component: Signup1,
  },
  {
    path: '/signup/POC系统',
    component: Signup2,
  }
];

const RouteList = ({ signups }) => (
  <Switch>
    {signups.map(router => {
      const { path, component, ...rest } = router;
      return <Route path={path} component={component} key={path} {...rest} />
    })}
  </Switch>
)


export default class extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Container fixed>
          <bars.Bar1>
            <Drawer1 />
          </bars.Bar1>
          <RouteList signups={Routers} />
        </Container>
      </>
    )
  }
}

