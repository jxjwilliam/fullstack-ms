import React, {useEffect} from 'react'
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux'
import { DEFAULT_HOME_PAGE, TOKEN } from '../constants'
import {logoutAction} from '../state/actions'

function SignOut (props) {
  sessionStorage.removeItem(TOKEN)
  useEffect(() => {
    props.logoutAction()
      .then(data => console.log(data))
      .catch(e => console.error(e))
  })

  return <Redirect to={DEFAULT_HOME_PAGE} />
}

export default connect(state => ({ auth: state.auth }), { logoutAction })(SignOut)
