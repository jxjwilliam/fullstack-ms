import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from "../state/actions";
import { base, mainList, navList, defaultUrl } from './routers';
import { getPageLayout } from '../components'

class RiskManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: base,
      base: `${base}`,
      redirect: defaultUrl
    }
  }

  render() {
    console.log('get match/location here...', this.props);
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
)(RiskManagement);
