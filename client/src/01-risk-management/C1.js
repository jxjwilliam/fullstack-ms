import React from 'react';
import {
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  Update as UpdateIcon
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './config';

const PARENT_PATH = subRouters['系统管理'];

const Info = [
  {
    path: "口令更改",
    icon: VisibilityIcon
  },
  {
    path: "用户信息权限变更",
    icon: UpdateIcon
  },
  {
    path: "角色查询",
    icon: PersonIcon
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
]
