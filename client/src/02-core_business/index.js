import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from '../state/actions'
import { getPageLayout } from '../components'
import Routers from './sub-routers'

class CoreBusiness extends Component {
  constructor(props) {
    super(props)
    props.getMenu1Action()
    this.Base = '核心企业及供应商'
    this.state = {
      title: this.Base,
      url: `/${this.Base}`,
      redirect: `/${this.Base}/POC额度/额度查询`
    }
  }

  render() {
    const { title, url, redirect } = this.state;
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
)(CoreBusiness);
