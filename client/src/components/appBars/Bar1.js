import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography, Link } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import FormDialog from '../dialogs/Dialog1'
import Search from './Search'
import Notification from "./Notification";
import Profile from './Profile'
import I18n from './Localization'
import { DEFAULT_LOGIN_PAGE } from '../../constants'

const useStyles = makeStyles((theme) => ({

}));

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
            {children}
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              <Link href="_book" color="inherit" variant="h6">Gitbook</Link>
            </Typography>
            <Search/>
            <Notification/>
            <Profile/>
            <I18n/>
            <Tooltip title={"register"}>
              <Button color="inherit" onClick={handleLogin}>注册</Button>
            </Tooltip>
            <FormDialog />
          </Toolbar>
        </AppBar>
      </div>
    )
  )
}
