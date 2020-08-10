import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from '../state/actions'
import { getPageLayout } from '../components/layout/jsx'
import Routers from './sub-routers'

class CoreBusiness extends Component {
  constructor(props) {
    super(props)
    props.getMenu1Action()
    this.state = {
      title: '核心企业及供应商',
      url: '/核心企业及供应商',
      redirect: `/核心企业及供应商/POC额度/额度查询`
    }
  }

  render() {
    const {title, url, redirect} = this.state;
    const pageLayout = getPageLayout(title, url, redirect, Routers);
    console.log(Routers);
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
