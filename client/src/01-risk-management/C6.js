import React from 'react';
import {
  CallToAction,
  OpenInBrowser,
  MergeType,
  MoveToInbox
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './common';
import {C6_2, C6_3, C6_4} from './containers'

const PARENT_PATH = subRouters['盟信'];

const Info = [
  {
    path: "全部盟信",
    icon: CallToAction
  },
  {
    path: "盟信开立",
    icon: OpenInBrowser,
    component: C6_2
  },
  {
    path: "盟信融资",
    icon: MergeType,
    component: C6_3
  },
  {
    path: "盟信流转",
    icon: MoveToInbox,
    component: C6_4
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];