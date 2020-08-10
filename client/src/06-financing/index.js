import React, { useState, Fragment } from 'react';
import { getPageLayout } from '../components'
import Routers, { BASE } from './sub-routers'

// TODO: props: {history, location, match}
export default function (props) {
  const title = 'POC融资'
  const url = BASE
  const redirect = `${BASE}/用户中心/account-info`
  const pageLayout = getPageLayout(title, url, redirect, Routers)

  return <Fragment>{pageLayout}</Fragment>
}
