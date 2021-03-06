import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
  Grid,
  Typography,
  Container,
} from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon, LockOpen as LockOpenIcon } from '@material-ui/icons'
// eslint-disable-next-line import/no-extraneous-dependencies
import { withStyles } from '@material-ui/core/styles'
import { DEFAULT_HOME_PAGE, TOKEN, REGISTER_PAGE } from '../constants'
import { loginAction } from '../state/actions'
import { Loading } from '../components/misc'

const useStyles = theme => ({
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
})

class SignIn extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { login: { username: '', password: '' }, loading: false, done: false }

  validateForm = () => {
    const {
      login: { username, password },
    } = this.state
    return username.length > 0 && password.length > 0
  }

  // this.setState({[e.target.id]: e.target.value});
  // Material-UI <Select>'s `id` doesn't work: undefined
  handleChange = ({ target: { name, value } }) => {
    this.setState(prevState => {
      return { login: { ...prevState.login, [name]: value } }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { loginAction } = this.props
    const { login } = this.state

    // eslint-disable-next-line react/destructuring-assignment
    loginAction(login).then(() => {
      this.setState({ loading: true })

      const {
        auth: { loggedIn, token },
      } = this.props
      if (loggedIn) {
        this.setState({ done: true, loading: false })
        sessionStorage.setItem(TOKEN, token)
      } else {
        this.setState({ done: false, loading: false })
        sessionStorage.removeItem(TOKEN)
      }
    })
  }

  render() {
    const { classes } = this.props
    const {
      login: { username, password },
      done,
      loading,
    } = this.state
    if (loading) return <Loading />
    if (done) return <Redirect to={DEFAULT_HOME_PAGE} />
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
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="用户名"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="密码"
              type="password"
              autoComplete="password"
              value={password}
              onChange={this.handleChange}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="记住我" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!this.validateForm}
              // onClick={this.handleSubmit}
              endIcon={<LockOpenIcon />}
            >
              登录
            </Button>
            <Grid container>
              <Grid item xs>
                <MuiLink component={Link} to="/home" variant="body2">
                  忘记密码?
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink component={Link} to={REGISTER_PAGE} variant="body2">
                  还没有账号？注册～{' '}
                  <span role="img" aria-label="hat">
                    🤠
                  </span>
                </MuiLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
}

export default compose(
  withStyles(useStyles, { name: 'login1' }),
  connect(state => ({ auth: state.auth }), { loginAction }),
)(SignIn)
