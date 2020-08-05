import React from 'react';
import {
  Functions as FunctionsIcon,
  QueryBuilder as QueryBuilderIcon,
  LocalFlorist as LocalFloristIcon
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './common';
import {C5_2} from './containers'

const PARENT_PATH = subRouters['额度管理'];

const Info = [
  {
    path: "查询",
    icon: QueryBuilderIcon
  },
  {
    path: "流程",
    icon: LocalFloristIcon,
    component: C5_2,
  },
  {
    path: "功能维护",
    icon: FunctionsIcon
  },
  // {
  //   path: "盟信流转（加查询）",
  //   icon: Description
  // },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];