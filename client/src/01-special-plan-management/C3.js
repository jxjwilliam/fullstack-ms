import React from 'react';
import {
  LocalFlorist,
  QueryBuilder,
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './common';
import {C3_1} from './containers';

const PARENT_PATH = subRouters['评级限额'];

const Info = [
  {
    path: "查询",
    icon: QueryBuilder,
    component: C3_1
  },
  {
    path: "流程",
    icon: LocalFlorist
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];
