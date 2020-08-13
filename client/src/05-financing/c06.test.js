import React from 'react'
import {FormatQuote, MoveToInbox, Payment, People} from "@material-ui/icons";
import { base, navList, mainList, defaultUrl } from "./routers";
import { getPageLayout } from '../components'

import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, } from '@material-ui/core';
import {
  ContactSupport,
  Shop,
  Apps,
  People,
  SupervisedUserCircle,
  ContactMail,
  WrapText,
  Textsms,
  FilterVintage,
  TrackChanges,
  Description,
  PersonPin,
} from '@material-ui/icons';
import { Layout1, getMenu, getContent } from '../components'
import { FTemplate, CTemplate } from '../containers'
export const BASE = '/financing';

const Config = [
  ['用户中心', ["账户信息", "交易信息", "人员管理", "企业信息", "个人信息", "邀请企业"]],
  ['POC管理', ["签收POC", "可用POC"]],
  ['POC融资', ["资产买入", "已经买入资产", "资产管理", "未承兑资产", "已承兑资产", "利率设置"]],
  ['人员管理', ["人员管理1", "人员管理2", "人员管理3"]],
  ['企业设置', ["签收POC2", "可用POC"]],
];

const MainIcons = [People, Apps, Shop, ContactSupport, SupervisedUserCircle]

const SubIcons = [
  [SupervisedUserCircle, ContactMail, WrapText, Textsms, FilterVintage, TrackChanges,],
  [TrackChanges, FilterVintage],
  [SupervisedUserCircle, ContactMail, WrapText, Textsms, FilterVintage, TrackChanges],
  [SupervisedUserCircle, ContactMail, WrapText],
  [Description, PersonPin],
]

function getSubRouters(inx, value) {
  const subIcon = SubIcons[inx];
  return value.reduce((acc, cur, idx) => ([...acc, {
    path: cur,
    icon: subIcon[idx],
  }]), [])
}

export default (function () {
  return Config.map(([key, value], idx) => {
    const subAry = getSubRouters(idx, value);
    // const Menu = getMenu(key, subAry);
    // const Content = getContent(key, subAry);
    // return {
    //   path: `${BASE}/${key}`,
    //   title: key,
    //   icon: MainIcons[idx],
    //   component: Layout1(Menu, Content)
    // }
  })
}.call())

beforeEach(() => {

})

describe('routers', () => {
  it('test menu and nav list', () => {
    expect('hello the world').toBeTruthy()
  })
})

afterEach(() => {
})

