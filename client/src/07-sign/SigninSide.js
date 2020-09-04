import React, {useState, useRef, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
  Paper,
  Grid,
  Typography,
} from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon, LockOpen as LockOpenIcon } from '@material-ui/icons'
// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from '@material-ui/core/styles';
import { DEFAULT_HOME_PAGE, TOKEN, REGISTER_PAGE } from '../constants'
import { loginAction } from '../state/actions'
import { useForm, Controller } from 'react-hook-form'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
}))

// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in-side/SignInSide.js
function SignInSide (props) {
  const classes = useStyles()
  const [done, setDone] = useState(false)
  const {register, handleSubmit, control} = useForm()
  const mounted = useRef();

  /**
   * The useRef creates an "instance variable" in functional component. It acts as a flag to indicate whether it is in mount or update phase without updating state.
   */
  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      mounted.current = true;
    } else {
      // do componentDidUpdate logic
      const { auth: { loggedIn, token } } = props;
      if (loggedIn) {
        setDone(true)
        sessionStorage.setItem(TOKEN, token)
      } else {
        setDone(false)
        sessionStorage.removeItem(TOKEN)
      }
    }
  })

  function onSubmit(data, event) {
    event.preventDefault()
    props.loginAction(data)
  }

  return  done ? <Redirect to={DEFAULT_HOME_PAGE} /> : (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            微服务 POC
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              id="username"
              label="用户名"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              name="password"
              label="密码"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox inputRef={register} name="remember" color="primary" defaultValue={false} />}
              label="记住我"
            />
            <FormControlLabel
              control={
                <Controller as={Checkbox} control={control} name="subscription" color={"primary"} defaultValue={false} />}
              label={"Subscription"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
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
                  还没有账号？注册～<span role="img" aria-label="hat">🤠</span>
                </MuiLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default connect((state) => ({ auth: state.auth }), { loginAction })(SignInSide)
