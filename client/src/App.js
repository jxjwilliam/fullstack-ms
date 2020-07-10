import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import './App.css';
import { BusinessRouters, GeneralRouters, BackdoorRouters } from './routers';

/**
 * routers2 includes `exact`
 */
const RouteList = ({ routes1, routes2, routes3 }) => {
  const r1 = routes1.map((router) => (
    <Route path={router.path} component={router.component} key={router.path} />
  ));

  const r2 = routes2.map((router) => {
    const { title, icon, ...rest } = router;
    return <Route key={router.path} {...rest} />;
  });

  const r3 = routes3.map((router) => (
    <Route path={router.path} component={router.component} key={router.path} />
  ));

  const list = r1.concat(r2, r3);

  return <Switch>{list}</Switch>;
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CssBaseline />
          <Container fixed>
            <Typography component="div" style={{ height: '100vh' }}>
              <RouteList
                routes1={BusinessRouters}
                routes2={GeneralRouters}
                routes3={BackdoorRouters}
              />
            </Typography>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
