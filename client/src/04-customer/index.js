import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from "../state/actions";
import { getPageLayout } from '../components'
import { base, navList, mainList, defaultUrl } from './routers';

class Customer extends Component {
  state = {
    current: base,
    base: `${base}`,
    redirect: defaultUrl,
  }

  render() {
    console.log('??????', navList, mainList, defaultUrl, base)
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
)(Customer);

