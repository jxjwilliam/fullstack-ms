import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  Container,
  CssBaseline
} from '@material-ui/core';
import Checkout from './Checkout'
import {Drawer, bars} from '../components'
import Signup1 from './Signup1'
import Signup2 from './signup2'
import Signup3 from './signup3'
import Signup4 from '../multi-steps/UserForm'

const Routers = [
  {
    path: '/signup',
    exact: true,
    component: Checkout,
  },
  {
    path: '/signup/供应商',
    component: Signup1,
  },
  {
    path: '/signup/盟信系统',
    component: Signup2,
  },
  {
    path: '/signup/核心企业',
    component: Signup3,
  }
];

const RouteList = ({signups}) => (
  <Switch>
    {signups.map(router => {
      const {path, component, ...rest} = router;
      return <Route path={path} component={component} key={path} {...rest} />
    })}
  </Switch>
)


export default class extends Component {
  render() {
    return (
      <>
      <CssBaseline/>
      <Container fixed>
        <bars.Bar1>
          <Drawer/>
        </bars.Bar1>
        <RouteList signups={Routers}/>
      </Container>
      </>
    )
  }
}

