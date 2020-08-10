import React from 'react';
import {
  CallToAction,
  OpenInBrowser,
  MergeType,
  MoveToInbox
} from '@material-ui/icons';
import { subRouters, getMenu, getContent } from './config';
import { C6_2, C6_3, C6_4 } from './containers'

const PARENT_PATH = subRouters['POC'];

const Info = [
  {
    path: "全部POC",
    icon: CallToAction
  },
  {
    path: "POC开立",
    icon: OpenInBrowser,
    component: C6_2
  },
  {
    path: "POC融资",
    icon: MergeType,
    component: C6_3
  },
  {
    path: "POC流转",
    icon: MoveToInbox,
    component: C6_4
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];
