import React from 'react';
import {
  QueryBuilder as QueryBuilderIcon,
  LocalFlorist as LocalFloristIcon
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './common';

const PARENT_PATH = subRouters['授信审批'];

const Info = [
  {
    path: "查询",
    icon: QueryBuilderIcon,
  },
  {
    path: "流程",
    icon: LocalFloristIcon
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];