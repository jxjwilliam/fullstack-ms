import React, {Component} from 'react';
import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  DialogActions,
  Button,
} from '@material-ui/core';

class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <>
      <Dialog open={this.props.open} fullWidth={true} maxWidth='sm'>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              成功
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>谢谢你的提交</h1>
        <p>请检查你的手机验证码继续</p>
        <DialogActions>
          <Button onClick={this.props.handleToggle} color="secondary">
            取消
          </Button>
        </DialogActions>
      </Dialog>
      </>
    );
  }
}

export default Success;
