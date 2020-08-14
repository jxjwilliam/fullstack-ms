import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  emoji: {}
}))

export default function({label='', symbol}) {
  const classes = useStyles();
  return (
    <span
      className={classes.emoji}
      role="img"
      aria-label={label}
      aria-hidden={label ? "false" : "true"}
    >
    {symbol}
  </span>
  )
}

