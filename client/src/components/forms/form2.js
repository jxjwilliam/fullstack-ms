import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { CheckCircleIcon, ErrorIcon } from '@material-ui/icons'
// import MaskedInput from 'react-text-mask'

function PasswordField() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return (
    <TextField
      type={visible ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleVisibility}>
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
export default function InputAdornments() {
  const [password, setPassword] = useState('')
  return (
    <PasswordField
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
  )
}

const ValidationField = props => {
  const { isValid, ...rest } = props
  const empty = props.value === ''
  const valid = isValid(props.value)
  let startAdornment
  if (empty) {
    startAdornment = null
  } else if (valid) {
    startAdornment = (
      <InputAdornment position="start">
        <CheckCircleIcon color="primary" />
      </InputAdornment>
    )
  } else {
    startAdornment = (
      <InputAdornment position="start">
        <ErrorIcon color="error" />
      </InputAdornment>
    )
  }
  return (
    <TextField
      {...rest}
      error={!empty && !valid}
      InputProps={{ startAdornment }}
    />
  )
}

const PhoneInput = ({ inputRef, ...props }) => (
  <MaskedInput
    {...props}
    ref={ref => {
      inputRef(ref ? ref.inputElement : null)
    }}
    mask={[
      '(',
      /[1-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]}
    placeholderChar={'\u2000'}
  />
)
