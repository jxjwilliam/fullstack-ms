import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { MenuBook, Storage, PostAdd, TextFields } from '@material-ui/icons'
import * as menus from '../menus'

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
})

const routers = [
  {
    title: 'Gitbook',
    path: '/gitbook',
    icon: MenuBook,
  },
  {
    title: 'DBMS API',
    path: '/ms-dbms',
    icon: Storage,
  },
  {
    title: 'DOC API',
    path: '/ms-doc',
    icon: PostAdd,
  },
]

export default function () {
  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <menus.Menu1 routers={routers} Icon={TextFields} title="Gitbook" />
    </div>
  )
}
