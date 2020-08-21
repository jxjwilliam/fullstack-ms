import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from './App'

const theme = createMuiTheme({
  spacing: 10,
})

export default function () {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  )
}
