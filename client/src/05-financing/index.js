import React from 'react'
import { getPageLayout } from '../components'
import { navList, mainList } from './routers'

// TODO: props: {history, location, match}
export default function (props) {
  const {
    location: { pathname },
    match: { url, path },
  } = props
  const options = {
    title: '融资',
    pathname,
    url,
    path,
  }
  const pageLayout = getPageLayout(navList, mainList, options)

  return <>{pageLayout}</>
}
