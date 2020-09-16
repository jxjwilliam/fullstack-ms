import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from '../state/actions'
import { getPageLayout } from '../components'
import { navList, mainList } from './routers'
import { checkLogin } from "../helpers/utils";

class CoreBusiness extends Component {
  constructor(props) {
    super(props)
    props.getMenu1Action()
    this.state = { title: '核心企业' }
  }

  render() {
    const {
      auth: { token },
      location: { pathname },
      match: { url, path },
    } = this.props
    const pageLayout = getPageLayout(navList, mainList, { pathname, url, path, })
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

export default connect(mapStateToProps, mapDispatchToProps)(CoreBusiness)
