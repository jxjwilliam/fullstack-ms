import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { DEFAULT_LOGIN_PAGE, TOKEN } from '../constants'
import { logoutAction } from '../state/actions'

function SignOut(props) {
  useEffect(() => {
    props
      .logoutAction()
      .then(() => sessionStorage.removeItem(TOKEN))
      .catch(e => console.error(e))
  }, [])
  return <Redirect to={DEFAULT_LOGIN_PAGE} />
}

export default connect(state => ({ auth: state.auth }), { logoutAction })(SignOut)
