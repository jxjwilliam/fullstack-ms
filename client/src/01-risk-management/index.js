import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from '../state/actions'
import { getPageLayout } from '../components'
import { mainList, navList } from './routers'
import {checkLogin} from "../helpers/utils";

class RiskManagement extends Component {
  constructor(props) {
    super(props)
    props.getMenu1Action()
    this.state = {}
  }

  render() {
    const {
      auth: { token },
      location: { pathname },
      match: { url },
    } = this.props
    const options = {
      pathname,
      url,
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getMenu1Action, getMenu2Action }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RiskManagement)
