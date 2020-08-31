import React from 'react'
import { connect } from 'react-redux'
import { getPageLayout } from '../components'
import { navList, mainList } from './routers'
import {checkLogin} from "../helpers/utils";

// TODO: props: {history, location, match}
function Financing ({auth: { token }, location: { pathname }, match: { url, path }}) {
  const pageLayout = getPageLayout(navList, mainList, {title: '融资', pathname, url, path,})
  return checkLogin(token) || <>{pageLayout}</>
}

export default connect((state) => ({ auth: state.auth }))(Financing)
