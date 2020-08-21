import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  emoji: {}
}))

export default function({symbol, label}) {
  const classes = useStyles();
  return (
    <span
      className={classes.emoji}
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
    {symbol}
  </span>
  )
}

