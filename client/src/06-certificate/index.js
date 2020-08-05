import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, amber } from '@material-ui/core/colors'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  },
  spacing: 10
})

export default function () {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  )
}
