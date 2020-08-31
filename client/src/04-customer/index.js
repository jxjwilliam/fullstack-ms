import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from '../state/actions'
import { getPageLayout } from '../components'
import { navList, mainList } from './routers'
import {checkLogin} from "../helpers/utils";

class Customer extends Component {
  render() {
    const {
      auth: { token },
      location: { pathname },
      match: { url, path },
    } = this.props
    const options = {
      pathname,
      url,
      path,
    }
    const pageLayout = getPageLayout(navList, mainList, options)
    return checkLogin(token) || <>{pageLayout}</>
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  menu1: state.menu1,
  menu2: state.menu2,
})


export default connect(mapStateToProps, { getMenu1Action, getMenu2Action })(Customer)
