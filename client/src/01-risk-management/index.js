import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMenu1Action, getMenu2Action } from '../state/actions'
import { getPageLayout } from '../components'
import { mainList, navList } from './routers'

class RiskManagement extends Component {
  constructor(props) {
    super(props)
    props.getMenu1Action()
    this.state = {}
  }

  render() {
    console.log('william test: ', this.props)
    const {
      location: { pathname },
      match: { url },
    } = this.props
    const options = {
      pathname,
      url,
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

export default connect(mapStateToProps, mapDispatchToProps)(RiskManagement)
