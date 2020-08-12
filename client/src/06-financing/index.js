import React, { useState, Fragment } from 'react';
import { getPageLayout } from '../components'
import Routers from './routers'

// TODO: props: {history, location, match}
export default function (props) {
  const Base = '/financing';
  const title = '融资'
  const url = `${Base}`
  const redirect = `${Base}/用户中心/account-info`
  const pageLayout = getPageLayout(url, title, redirect, Routers)

  return <Fragment>{pageLayout}</Fragment>
}
