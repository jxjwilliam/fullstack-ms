import React from 'react';
import {
  Functions as FunctionsIcon,
  QueryBuilder as QueryBuilderIcon,
  LocalFlorist as LocalFloristIcon
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './common';
import {C2_1, C2_2, C2_3} from './containers'

const PARENT_PATH = subRouters['客户信息'];

const Info = [
  {
    path: "查询",
    icon: QueryBuilderIcon,
    component: C2_1
  },
  {
    path: "流程",
    icon: LocalFloristIcon,
    component: C2_2
  },
  {
    path: "功能维护",
    icon: FunctionsIcon,
    component: C2_3
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
]
