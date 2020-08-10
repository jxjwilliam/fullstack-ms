import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Home from './Home';
import theme from './theme';
import { DEFAULT_LOGIN_PAGE } from '../constants'

class HomeContainer extends Component {

  state = {
    hasToken: sessionStorage.getItem("authToken")
  }

  render() {
    if (!this.state.hasToken) {
      const { loggedIn } = this.props.auth;
      if (!loggedIn) {
        console.log(`TODO: should redirect to ${DEFAULT_LOGIN_PAGE}`)
        // return <Redirect to={DEFAULT_LOGIN_PAGE}/>
      }
    }
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    )
  }
}

export default connect(
  state => ({ auth: state.auth })
)(HomeContainer);
