import React from 'react';
import {
  Lock,
  Visibility,
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './common';

const PARENT_PATH = subRouters['参数配置'];

const Info = [
  {
    path: "口令更改",
    icon: Visibility
  },
  {
    path: "权限变更",
    icon: Lock
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];
