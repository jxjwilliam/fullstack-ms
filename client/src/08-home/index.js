import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { Container, CssBaseline } from '@material-ui/core'
import { bars, footers } from '../components'
import theme from './theme'
import HomeDemo from './demo'
import { checkLogin } from '../helpers/utils'

function Home() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <bars.Bar1>{/* TODO: children */}</bars.Bar1>
        <HomeDemo />
        <footers.Footer1 />
      </Container>
    </>
  )
}

function HomeContainer({ auth: { token } }) {
  console.log('Home Token: ', token)
  return (
    checkLogin(token) || (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )
  )
}

export default connect(state => ({ auth: state.auth }))(HomeContainer)
