import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Avatar, Button, CssBaseline, FormControlLabel, TextField, Grid, Checkbox,
  Link as MuiLink, Select, InputLabel, MenuItem, FormControl,
  Typography, Container
} from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon, LockOpen as LockOpenIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import {signupAction} from "../state/actions";
import {DEFAULT_LOGIN_PAGE} from '../constants'

// https://raw.githubusercontent.com/mui-org/material-ui/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js
const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function SignUp (props) {
  const classes = useStyles();
  const [register, setRegister] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    role: '',
    category: '',
  })
  // TODO: `done`
  const [done, setDone] = useState(false)

  // Select can't capture `id`: undefined. Only `name` works.
  const handleChange = ({target: { name, value}}) => {
    setRegister({...register, [name]: value})
  }

  const handleSubmit = (ev) => {
    props.signupAction(register).then(() => setDone(true))
    ev.preventDefault()
  }

  const roleList = ['member', 'admin', 'owner'].map(item => (
    <MenuItem value={item} key={item}>{item}</MenuItem>
  ))
  const categoryList = ['local', 'wechat', 'gmail'].map(item => (
    <MenuItem value={item} key={item}>{item}</MenuItem>
  ))

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          POC系统注册
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="account"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="账户名称"
                autoFocus
                value={register.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="手机号码"
                name="phone"
                autoComplete="phone"
                value={register.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="邮件"
                name="email"
                autoComplete="email"
                value={register.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="密码"
                name="password"
                type="password"
                autoComplete="current-password"
                value={register.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId='role-label'
                  id={'role'}
                  name={'role'}
                  value={register.role}
                  onChange={handleChange}
                >
                  {roleList}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId='category-label'
                  id={'category'}
                  name={'category'}
                  value={register.category}
                  onChange={handleChange}
                >
                  {categoryList}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraInfo" color="primary" />}
                label="希望了解更多"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            endIcon={<LockOpenIcon />}
          >
            提交注册申请
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <MuiLink component={Link} to={DEFAULT_LOGIN_PAGE} variant="body2">
                已经注册？点击登陆
              </MuiLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


export default connect(
  state => ({ register: state.register }),
  { signupAction }
  )(SignUp)
