import React, { useState, Fragment } from 'react';
import { getPageLayout } from '../components'
import { base, navList, mainList } from './routers';

// TODO: props: {history, location, match}
export default function (props) {
  const opts = {
    title: '融资',
    base: `${base}`,
  }
  const {location:{pathname}, match:{url, path}} = props;
  const options = {
    base: `${base}`,
    pathname,
    url,
    path,
  }
  const pageLayout = getPageLayout(navList, mainList, options);

  return <Fragment>{pageLayout}</Fragment>
}
