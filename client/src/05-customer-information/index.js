import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from "../state/actions";
import { getPageLayout } from '../components'
import Routers from './sub-routers'

class Customer extends Component {
  Base = '客戶信息'
  state = {
    title: this.Base,
    url: `/${this.Base}`,
    redirect: `/${this.Base}/客户基本信息`
  }

  render() {
    const { title, url, redirect } = this.state
    const pageLayout = getPageLayout(title, url, redirect, Routers);
    return <Fragment>{pageLayout}</Fragment>
  }
}

const mapStateToProps = state => ({
  menu1: state.menu1,
  menu2: state.menu2,
})

const mapDispatchToProps = dispatch => bindActionCreators({ getMenu1Action, getMenu2Action }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customer);

