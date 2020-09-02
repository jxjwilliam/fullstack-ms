import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import * as menus from '../menus'
import {SIGNOUT_PAGE} from '../../constants'

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
})

const routers = [
  {
    title: 'Profile',
    path: '/profile',
  },
  {
    title: 'My account',
    path: '/myAccount',
  },
  {
    title: 'Sign Out',
    path: SIGNOUT_PAGE, //~: /signout
  }
]

export default function () {
  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <menus.Menu1 routers={routers} Icon={AccountCircle} title="Account" />
    </div>
  )
}
