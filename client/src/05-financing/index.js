import React, { useState, Fragment } from 'react';
import { getPageLayout } from '../components'
import { base, navList, mainList, defaultUrl } from './routers';

// TODO: props: {history, location, match}
export default function (props) {
  const opts = {
    title: '融资',
    current: base,
    base: `${base}`,
    redirect: defaultUrl
  }
  const pageLayout = getPageLayout(navList, mainList, opts);

  return <Fragment>{pageLayout}</Fragment>
}
