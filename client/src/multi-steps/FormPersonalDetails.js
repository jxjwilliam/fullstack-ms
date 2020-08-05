import React, {Component} from 'react';
import {
  Dialog,
  AppBar,
  TextField,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values, handleChange} = this.props;
    return (
      <>
      <Dialog open={this.props.open} fullWidth={true} maxWidth='sm'>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              请输入个人信息
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          placeholder="职业"
          label="职业"
          id="occupation"
          onChange={handleChange}
          value={values.occupation}
          margin="normal"
          fullWidth={true}
        />
        <br />
        <TextField
          placeholder="所在城市"
          label="所在城市"
          id="city"
          onChange={handleChange}
          value={values.city}
          margin="normal"
          fullWidth={true}
        />
        <br />
        <TextField
          placeholder="个人信息"
          label="个人信息"
          id="bio"
          onChange={handleChange}
          value={values.bio}
          margin="normal"
          fullWidth={true}
        />
        <br />

        <Button color="secondary" variant="contained" onClick={this.back}>
          回退
        </Button>

        <Button color="primary" variant="contained" onClick={this.continue}>
          继续
        </Button>
      </Dialog>
      </>
    );
  }
}

export default FormPersonalDetails;
