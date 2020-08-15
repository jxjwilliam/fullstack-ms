import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles';
import {Container, CssBaseline} from "@material-ui/core";
import { DEFAULT_LOGIN_PAGE } from '../constants'
import {bars, footers} from "../components";
import theme from './theme';
import HomeDemo from "./demo";

function Home () {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <bars.Bar1>
          {/*TODO: children*/}
        </bars.Bar1>
        <HomeDemo />
        <footers.Footer1 />
      </Container>
    </>
  )
}

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
        <Home />
      </ThemeProvider>
    )
  }
}

export default connect(
  state => ({ auth: state.auth })
)(HomeContainer);
