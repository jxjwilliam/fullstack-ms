import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from '../state/actions'
import { getPageLayout } from '../components'
import { base, navList, mainList, defaultUrl } from './routers';

class CoreBusiness extends Component {
  constructor(props) {
    super(props)
    props.getMenu1Action()
    this.state = {
      current: base,
      base: `${base}`,
      redirect: defaultUrl, //: /核心企业及供应商/POC额度/额度查询
    }
  }

  render() {
    const pageLayout = getPageLayout(navList, mainList, this.state);
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
