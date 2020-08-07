import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {compose} from 'recompose';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
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
  FormControl,
  NativeSelect,
  InputBase,
  Input,
  Select,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {signupAction} from '../state/actions'
import {DEFAULT_LOGIN_PAGE} from '../helpers/constants';
import {fetching} from '../helpers/utils'



////////////////////////////////

class CascadeAddress extends Component {

  state = {
    address: {
      province: '',
      city: '',
      district: ''
    },
    data: [],
    provinces: [],
    cities: [],
    districts: []
  };

  classes = {
    select: {
      padding: 20,
    }
  };

  async componentDidMount() {
    const result = await axios(`/data/address`);
    this.setState(() => {
      const data = result.data;
      const provinces = Object.keys(data);
      return {data, provinces};
    })
  }

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = e => {
    const selected = e.target.value;
    const level = e.target.id;
    const {data} = this.state;

    if (level === 'province') {
      const cities = Object.keys(data[selected]);
      this.setState({address: {[level]: selected}, cities, districts: []});
    }
    else if (level === 'city') {
      const districts = data[this.state.address.province][selected]
      this.setState({address: {...this.state.address, [level]: selected}, districts});
    }
    else { //district
      this.setState({address: {...this.state.address, [level]: selected}});
    }
  };

  render() {
    const {province, city, district} = this.state.address;
    const {open, provinces, cities, districts} = this.state;

    return (
      <>
      <Grid item xs={12} sm={4}>
        <Select
          native
          value={province}
          onChange={this.handleChange}
          input={<Input id="province"/>}
          style={{padding: 20}}
        >
          <option value="0">--- 请选择省份 ---</option>
          {provinces.map(p => <option value={p} key={p}>{p}</option>)}
        </Select>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Select
          native
          value={city}
          onChange={this.handleChange}
          input={<Input id="city"/>}
          style={{padding: 20}}
        >
          <option value="0">--- 请选择城市 ---</option>
          {cities.map(c => <option value={c} key={c}>{c}</option>)}
        </Select>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Select
          native
          value={district}
          onChange={this.handleChange}
          input={<Input id="district"/>}
          style={{padding: 20}}
        >
          <option value="0">--- 请选择区/县 ---</option>
          {districts.map(d => <option value={d} key={d}>{d}</option>)}
        </Select>
      </Grid>
      </>
    )
  }
}

////////////////////////////////

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(6),
  },
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

class SignUp1 extends Component {
  state = {
    register: {
      account: '',
      name: '',
      email: '',
      phone: '',
      password: '',
      organization_id: -1,
      department_id: -1,
      role_id: -1,
    },
    title: '',
    roles: [],
    organizations: [],
    departments: [],
    done: false
  }

  async componentDidMount() {
    // const result = await axios(`/data/signupInfo`);
    // this.setState(() => ({...result.data}));
    this.loadResources('organizations');
  }

  validateForm = () => {
    const {account, password} = this.state.register;
    return account.length > 0 && password.length > 0;
  }

  handleChange = e => {
    const {target: {name, value}} = e;
    if (name === 'organization_id') {
      this.loadResources('departments');
      this.loadResources('roles', `roles/${value}`)
    }
    this.setState(preState => ({register: {...preState.register, [name]: value}}));
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.signupAction(this.state.register)
      .then(data => {
        if (this.props.register.account) {
          this.setState({done: true});
        }
        else {
          this.setState({done: false});
        }
      })
  };

  loadResources = async(resource, url = resource) => {
    fetching(`/api/${url}`).then(data => this.setState({[resource]: data}))
  };

  getList = (resources) => {
    if(Array.isArray(resources)) {
      return resources.map(resource =>
        <option key={resource.id} value={resource.id}>{resource.name}</option>)
    }
    else {
      return (
        <option key={resources.id} value={resources.id}>{resources.name}</option>
      )

    }
  };

  render() {
    const {classes} = this.props;
    const {
      roles, departments, organizations, done,
      register: {organization_id, department_id, role_id}
    } = this.state;

    if (done) {
      return <Redirect to={DEFAULT_LOGIN_PAGE}/>
    }

    let listRoles, listOrgs, listDepartments;
    if (Object.keys(roles).length > 0 || roles.length > 0) {
      listRoles = this.getList(roles);
    }
    if (organizations.length > 0) {
      listOrgs = this.getList(organizations);
    }
    if (departments.length > 0) {
      listDepartments = this.getList(departments);
    }

    return (
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            盟信系统注册
          </Typography>

          <form className={`${classes.form}`} noValidate>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="account"
                  name="account"
                  variant="outlined"
                  required
                  fullWidth
                  label="账户名称"
                  autoFocus
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="姓名"
                  name="name"
                  autoComplete="name"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl className={classes.margin}>
                  <NativeSelect
                    value={organization_id}
                    onChange={this.handleChange}
                    input={<BootstrapInput name="organization_id"/>}
                  >
                    <option value=""> -请选择组织-</option>
                    {listOrgs}
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl className={classes.margin}>
                  <NativeSelect
                    value={department_id}
                    onChange={this.handleChange}
                    input={<BootstrapInput name="department_id"/>}
                  >
                    <option value=""> -请选择部门-</option>
                    {listDepartments}
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl className={classes.margin}>
                  <NativeSelect
                    value={role_id}
                    onChange={this.handleChange}
                    input={<BootstrapInput name="role_id"/>}
                  >
                    <option value=""> -请选择角色-</option>
                    {listRoles}
                  </NativeSelect>
                </FormControl>
              </Grid>

              <CascadeAddress/>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="邮件"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="手机号码"
                  name="phone"
                  autoComplete="phone"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="密码"
                  type="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="其它"
                  name="more"
                  autoComplete="more"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary"/>}
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
              disabled={!this.validateForm}
              onClick={this.handleSubmit}
            >
              提交注册申请
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  已经注册？点击登陆
                </Link>
              </Grid>
            </Grid>
          </form>

        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({register: state.register});

const mapDispatchToProps = dispatch => bindActionCreators({signupAction}, dispatch);

export default compose(
  withStyles(useStyles, {name: 'signup1'}),
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp1);
