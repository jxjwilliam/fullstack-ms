import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from "../state/actions";
import { getPageLayout } from '../components'
import { base, mainList, navList, defaultUrl } from './routers';

class RiskManagement extends Component {
  constructor(props) {
    super(props);
    props.getMenu1Action()
    this.state = {
      current: base,
      base: `${base}`,
      redirect: defaultUrl
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
)(RiskManagement);
