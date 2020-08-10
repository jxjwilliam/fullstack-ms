import React from 'react';
import {
  PlaylistAddCheck,
  ListAlt,
  CallToAction
} from '@material-ui/icons';
import {subRouters, getMenu, getContent} from './config';

const PARENT_PATH = subRouters['流程管理'];

const Info = [
  {
    path: "待办任务列表",
    icon: ListAlt
  },
  {
    path: "本人完成任务",
    icon: PlaylistAddCheck
  }, {
    path: "全部结束任务",
    icon: CallToAction
  },
];

export default [
  getMenu(PARENT_PATH, Info),
  getContent(PARENT_PATH, Info)
];
