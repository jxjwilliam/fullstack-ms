import React, {Component} from 'react';
import {
  Dialog,
  AppBar,
  Button,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

class Confirm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;
    return (
      <>
      <Dialog open={this.props.open} fullWidth={true} maxWidth='sm'>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              请确认用户输入
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio}/>
          </ListItem>
        </List>
        <br />

        <Button
          color="secondary"
          variant="contained"
          onClick={this.back}
        >回退</Button>

        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
        >确认并继续</Button>
      </Dialog>
      </>
    );
  }
}

export default Confirm;
