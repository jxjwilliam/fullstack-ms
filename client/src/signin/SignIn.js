import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose';
import axios from 'axios'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { DEFAULT_HOME_PAGE } from '../helpers/constants'
import { loginAction } from '../state/actions'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SignIn extends Component {
  state = {
    login: {
      user: '',
      password: '',
    },
    done: false
  }

  validateForm = () => {
    return this.state.login.user.length > 0 && this.state.login.password.length > 0;
  }

  // this.setState({[e.target.id]: e.target.value});
  handleChange = e => {
    this.setState({ login: { ...this.state.login, [e.target.id]: e.target.value } })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    // TODO validates, post a form-body
    this.props.loginAction(this.state.login)
      .then(data => {
        const { loggedIn } = this.props.auth;
        if (loggedIn) {
          this.setState({ done: true });
          sessionStorage.setItem("authToken", this.props.auth.token)
        }
        else {
          this.setState({ done: false, title: this.props.auth.msg });
          sessionStorage.removeItem("authToken")
        }
      })
  }

  render() {
    const { classes } = this.props;
    const { login: { user, password }, done } = this.state;
    //if (this.props.auth.isAuthenticated())
    if (done) {
      return <Redirect to={DEFAULT_HOME_PAGE} />
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            微服务 POC
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="用户名"
              name="user"
              autoComplete="user"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="密码"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="记住我"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!this.validateForm}
              onClick={this.handleSubmit}
            >
              登录
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  忘记密码?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  还没有账号？注册～🤠
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default compose(
  withStyles(useStyles, { name: 'login1' }),
  connect(
    state => ({ auth: state.auth }),
    { loginAction }
  )
)(SignIn);
