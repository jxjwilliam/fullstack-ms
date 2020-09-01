import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {compose} from 'recompose';
import {withStyles} from '@material-ui/styles';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import {Add} from '@material-ui/icons';

const styles = {
  form: {
    width: 300
  },
  field: {
    width: 260,
    marginLeft: 20,
  }
};

class Dialog1 extends Component {
  state = {
    open: false,
    form: {
      account: '',
      name: '',
      role: '',
      description: '',
    },
    roles: []
  }

  async componentDidMount() {
    const data = {}; //result.data;
    this.setState(() => ({...data, roles: data.roles || []}))
  }

  handleToggle = () => {
    this.setState(prevState => ({open: !prevState.open}));
  };

  handleChange = ({target: {id, value}}) => {
    this.setState({
      form: {
        ...this.state.form,
        [id]: value
      }
    });
  }

  handleSubmit = () => {
    // TODO: validate
    const {form} = this.state;
    this.props.onCreate(form);
    this.setState({
      open: false,
      form: {
        name: '',
        account: '',
        description: ''
      }
    })
  }

  render() {
    const {form: {account, name, role, description}, open, roles} = this.state;
    const {classes} = this.props;
    return (
      <div>
        <Fab color="primary" onClick={this.handleToggle}>
          <Add />
        </Fab>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">创建用户表单</DialogTitle>
          <DialogContent>
            <DialogContentText>
              添加，修改用户账号
            </DialogContentText>
          </DialogContent>
          <form className={classes.form}>
            <TextField
              autoFocus
              id="account"
              label="账号"
              value={account}
              onChange={this.handleChange}
              fullWidth
              margin="dense"
              className={classes.field}
            />
            <br/>
            <TextField
              id="name"
              label="姓名"
              value={name}
              onChange={this.handleChange}
              margin="normal"
              className={classes.field}
            />
            <br/>
            <FormControl className={classes.field}>
              <InputLabel htmlFor="role">角色</InputLabel>
              <Select
                value={role}
                onChange={this.handleChange}
                inputProps={{
                  name: 'role',
                  id: 'role',
                }}
              >
                <MenuItem value=""><em>请选择</em></MenuItem>
                {roles.map(r => <MenuItem value={r} key={r}>{r}</MenuItem>)}
              </Select>
            </FormControl>
            <br/>
            <TextField
              multiline
              rows={4}
              id="description"
              label="描述"
              value={description}
              onChange={this.handleChange}
              margin="normal"
              className={classes.field}
            />
          </form>
          <DialogActions>
            <Button onClick={this.handleToggle} color="secondary">
              取消
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              创建
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default compose(
  withStyles(styles, {name: 'form1'}),
  connect(mapStateToProps, mapDispatchToProps)
)(Dialog1);
