import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {
  ContactSupport,
  Shop,
  Apps,
  People,
  HelpOutline,
  ViewComfy,
  ArrowBack,
  Backup,
} from '@material-ui/icons'
import { defer, capitalize, fetching } from '../helpers/utils'

export const BASE = '/资产管理'

const subRouters = ['资产池管理', '资产包管理', '资产评估', '信息管理'].reduce(
  (obj, url) => {
    obj[url] = `${BASE}/${url}`
    return obj
  },
  {}
)

export default subRouters
