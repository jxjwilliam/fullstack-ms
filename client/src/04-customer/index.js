import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from '../state/actions'
import { getPageLayout } from '../components'
import { navList, mainList } from './routers'

class Customer extends Component {
  render() {
    const {
      location: { pathname },
      match: { url, path },
    } = this.props
    const options = {
      pathname,
      url,
      path,
    }
    const pageLayout = getPageLayout(navList, mainList, options)
    return <>{pageLayout}</>
  }
}

const mapStateToProps = (state) => ({
  menu1: state.menu1,
  menu2: state.menu2,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getMenu1Action, getMenu2Action }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Customer)
