import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { AppBar, Toolbar, Button, Link } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import { Home as HomeIcon, Business as BusinessIcon } from '@material-ui/icons'
import Gitbook from './Gitbook'
import Search from './Search'
import Notification from './Notification'
import Profile from './Profile'
import I18n from './Localization'
import FormDialog from '../dialogs/Dialog1'
import { DEFAULT_LOGIN_PAGE } from '../../constants'
import Drawer1 from '../misc/Drawer1'
import * as menus from '../menus'
import { BusinessRouters } from '../../routers'

const Group1 = () => (
  <>
    <Link href="/" color="inherit" variant="h6">
      <HomeIcon />
    </Link>
    <Drawer1 />
    <menus.Menu1
      routers={BusinessRouters}
      Icon={BusinessIcon}
      title="Business"
    />
    <Gitbook />
  </>
)

const Group2 = () => (
  <>
    <Search />
    <Notification />
    <Profile />
    <I18n />
  </>
)

const Group3 = ({ handleLogin }) => (
  <>
    <Tooltip title="register">
      <Button color="inherit" onClick={handleLogin}>
        注册
      </Button>
    </Tooltip>
    <FormDialog />
  </>
)

export default function ({ children }) {
  const [to, setTo] = useState()
  const handleLogin = () => {
    setTo(DEFAULT_LOGIN_PAGE)
  }

  // eslint-disable-next-line
  return to ? <Redirect to={to} /> : (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Group1 />
          {children}
          <Group2 />
          <Group3 handleLogin={handleLogin} />
        </Toolbar>
      </AppBar>
    </div>
  )
}
