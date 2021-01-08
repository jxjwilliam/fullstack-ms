import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core'
import TimerIcon from '@material-ui/icons/Timer'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
    fontSize: 24,
  },
}))

export default function () {
  const classes = useStyles()
  const [seconds, setSeconds] = useState('')
  const [active, setActive] = useState(true)

  const handleClick = () => {
    setActive(!active)
  }

  useEffect(() => {
    let timer = null
    if (active) {
      timer = setInterval(() => {
        const second = new Date().toLocaleTimeString('en-US')
        setSeconds(second)
      }, 1000)
    } else {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [active, seconds])

  return (
    <div>
      <Card className={classes.root}>
        <Typography variant="h2" component="h2">
          Clock
        </Typography>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {seconds}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="secondary" variant="contained" onClick={handleClick} startIcon={<TimerIcon />}>
            {active ? 'Stop' : 'Start'}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
