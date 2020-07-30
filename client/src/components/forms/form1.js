import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  container: { margin: theme.spacing(2) },
}))

// Placeholder and helper text
export default function ValidationAndErrorDisplay() {
  const classes = useStyles()
  const [inputs, setInputs] = useState([
    {
      id: 'phone',
      label: 'Phone',
      placeholder: '999-999-9999',
      value: '',
      error: false,
      helperText: 'Any valid phone number will do',
      getHelperText: error =>
        error
          ? 'Woops. Not a valid phone number'
          : 'Any valid phone number will do',
      isValid: value =>
        // eslint-disable-next-line no-useless-escape
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value),
    },
    {
      id: 'email',
      label: 'Email',
      placeholder: 'john@acme.com',
      value: '',
      error: false,
      helperText: 'Any valid email address will do',
      getHelperText: error =>
        error
          ? 'Woops. Not a valid email address'
          : 'Any valid email address will do',
      isValid: value => /\S+@\S+\.\S+/.test(value),
    },
  ])
  const onChange = ({ target: { id, value } }) => {
    const newInputs = [...inputs]
    const index = inputs.findIndex(input => input.id === id)
    const input = inputs[index]
    const isValid = input.isValid(value)
    newInputs[index] = {
      ...input,
      value: value,
      error: !isValid,
      helperText: input.getHelperText(!isValid),
    }
    setInputs(newInputs)
  }
  return (
    <Grid container spacing={4} className={classes.container}>
      {inputs.map(input => (
        <Grid item key={input.id}>
          <TextField
            id={input.id}
            label={input.label}
            placeholder={input.placeholder}
            helperText={input.helperText}
            value={input.value}
            onChange={onChange}
            error={input.error}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export function PasswordFields() {
  const classes = useStyles()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Grid container spacing={4} className={classes.container}>
      <Grid item>
        <TextField
          id="username"
          label="Username"
          autoComplete="username"
          InputProps={{ name: 'username' }}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="password"
          type="password"
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Grid>
    </Grid>
  )
}

export function MultilineInput() {
  const [multiline, setMultiline] = useState('')
  return (
    <TextField
      multiline
      rows={5}
      value={multiline}
      onChange={e => setMultiline(e.target.value)}
    />
  )
}
