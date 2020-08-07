import React from 'react'
import {Typography, Link} from '@material-ui/core'
import {Dialog} from '../exercises'
import {bars, Drawer} from '../../components'
const BASE = '/certificate';

const Header = () => {
  return (
    <bars.Bar2>
      <Drawer/>
      <Typography>
        <Link href={BASE} color="inherit" variant="h6">凭证</Link>
      </Typography>
      <Dialog />
    </bars.Bar2>
  )
}

export default Header
