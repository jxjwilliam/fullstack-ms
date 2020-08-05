import React, {Component} from 'react';
import {
  Dialog,
  AppBar,
  TextField,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {values, handleChange} = this.props;
    return (
      <>
      <Dialog open={this.props.open} fullWidth={true} maxWidth='sm'>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              请输入详细信息
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          autoFocus
          id="firstName"
          placeholder="名字"
          label="名字"
          value={values.firstName}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          id="lastName"
          label="姓氏"
          placeholder="姓氏"
          value={values.lastName}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          id="email"
          label="邮件"
          placeholder="邮件"
          value={values.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <br />
        <Button color="primary" variant="contained" onClick={this.continue}>
          继续
        </Button>
      </Dialog>
      </>
    );
  }
}

export default FormUserDetails;
