import React from 'react';
import {
  PersonPin,
  AlarmOn,
  ChromeReaderMode,
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './config';
import {C9_1} from './containers'
const PARENT_PATH = subRouters['运营管理'];

const Info = [
  {
    path: "清算",
    icon: ChromeReaderMode,
    component: C9_1
  },
  {
    path: "交易查询",
    icon: AlarmOn
  },
  {
    path: "账户信息",
    icon: PersonPin
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];
