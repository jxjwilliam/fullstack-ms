import React, { useState, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography, Link } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import FormDialog from '../dialogs/Dialog1'
import Search from './Search'
import Notification from "./Notification";
import Profile from './Profile'
import I18n from './Localization'
import { DEFAULT_LOGIN_PAGE } from '../../constants'
import {Drawer1, menus} from "../../components";
import {Home as HomeIcon} from "@material-ui/icons";
import {BusinessRouters} from '../../routers'

const useStyles = makeStyles((theme) => ({

}));

const Group1 = () => (
  <Fragment>
    <Drawer1 />
    <Typography>
      <Link href="/home" color="inherit" variant="h6"><HomeIcon/></Link>
    </Typography>
    <menus.Menu1 routers={BusinessRouters} />
  </Fragment>
)

const Group2 = () => (
  <Fragment>
    <Search/>
    <Notification/>
    <Profile/>
    <I18n/>
  </Fragment>
)

const Group3 = ({handleLogin}) => (
  <Fragment>
    <Tooltip title={"register"}>
      <Button color="inherit" onClick={handleLogin}>注册</Button>
    </Tooltip>
    <FormDialog />
  </Fragment>
)

export default function ({ children }) {
  const classes = useStyles();
  const [to, setTo] = useState();
  const handleLogin = () => {
    setTo(DEFAULT_LOGIN_PAGE);
  }

  return (
    to ? <Redirect to={to} /> : (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Group1 />
            {children}
            <Group2/>
            <Group3 handleLogin={handleLogin}/>
          </Toolbar>
        </AppBar>
      </div>
    )
  )
}
