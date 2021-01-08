import React, { useState } from 'react'
import { CssBaseline, Typography, Container, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
}))

export default function () {
  const classes = useStyles()

  const initialValues = ['Most popular ideas', 'Latest ideas', 'My ideas']
  const labels = initialValues.map(label => <Tab label={label} key={label} />)

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder - {initialValues[value]}.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            {labels}
          </Tabs>
        </Container>
      </footer>
    </div>
  )
}
