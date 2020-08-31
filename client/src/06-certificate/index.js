import React from 'react'
import { connect } from "react-redux"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from './App'

const theme = createMuiTheme({
  spacing: 10,
})

function Certificate () {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  )
}

export default connect(state => ({ auth: state.auth }))(Certificate)
