import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core';
import FormDialog from '../dialogs/Dialog1'
import {DEFAULT_LOGIN_PAGE} from '../../config/constants'


export default function ({children}) {
  const [to, setTo] = useState();
  const handleLogin = () => {
    setTo(DEFAULT_LOGIN_PAGE);
  }

  return (
    to ? <Redirect to={to}/> : (
        <div style={{flexGrow: 1}}>
          <AppBar position="static">
            <Toolbar>

              {children}

              <Typography variant="h6" style={{flexGrow: 1}}>
                盟信系统
              </Typography>

              <Button color="inherit" onClick={handleLogin}>注册</Button>

              <FormDialog/>
            </Toolbar>
          </AppBar>
        </div>
      )
  )
}