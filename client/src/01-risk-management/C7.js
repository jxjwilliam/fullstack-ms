import React from 'react';
import {
  ChromeReaderMode,
  Warning,
  WrapText,
  Textsms,
  FilterVintage,
  TrackChanges,
  Description,
  PersonPin,
  Message,
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './common';
import {C7_1, C7_2, C7_3, C7_4} from './containers'

const PARENT_PATH = subRouters['贷后管理'];

const Info = [
  {
    path: "贷后检查",
    icon: ChromeReaderMode,
    component: C7_1
  },
  {
    path: "风险预警",
    icon: Warning,
    component: C7_2
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];