import React from 'react';
import {
  Pinterest as PinterestIcon,
  MoneyOff as MoneyOffIcon,
  VerifiedUser,
  Money as MoneyIcon
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './config';

const PARENT_PATH = subRouters['还款'];

const Info = [
  {
    path: '待还款',
    icon: MoneyOffIcon
  },
  {
    path: '还款审批',
    icon: VerifiedUser
  },
  {
    path: '已还款',
    icon: MoneyIcon
  },
  {
    path: '罚息管理',
    icon: PinterestIcon
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];
