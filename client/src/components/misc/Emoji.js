import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  emoji: {}
}))

export default function({symbol}) {
  const classes = useStyles();
  return (
    <span
      className={classes.emoji}
      role="img"
    >
    {symbol}
  </span>
  )
}

