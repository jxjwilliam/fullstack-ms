import React, {Component, useState} from 'react';
import {
  Button,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: 300
  },
  field: {
    width: 260,
    marginLeft: 20,
  }
}));

export default function () {
  const classes = useStyles();
  const [form, setForm] = useState({})

  handleChange = ({target: {id, value}}) => {
    setForm({
      form: {
        ...this.state.form,
        [id]: value
      }
    });
  }

  return (
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
  )
}
