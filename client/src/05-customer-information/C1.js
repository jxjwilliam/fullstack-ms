import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Message,
  MailOutline,
  Person,
  PermIdentity,
} from '@material-ui/icons';
import {subRouters} from './common';
import {SetView} from '../02-core_business/common'
import {C1_1} from './containers'

const PARENT_PATH = subRouters['客户基本信息'];

const Info = [
  {
    path: "基础信息",
    icon: Message,
    component: C1_1, // SetView('c1-1-1'),
  },
  {
    path: "管理层信息",
    icon: MailOutline,
    component: SetView('c1-2'),
  }, {
    path: "自然人实际控制人",
    icon: Person,
    component: SetView('c1-3'),
  },
  {
    path: "非自然人实际控制人",
    icon: PermIdentity,
    component: SetView('c1-4'),
  },
  // {
  //   path: "主要财务资料",
  //   icon: BarChartIcon,
  //   component: SetView('m1'),
  // },
  // {
  //   path: "客户评级与限额",
  //   icon: BarChartIcon,
  //   component: SetView('m1'),
  // },
  // {
  //   path: "预警信息",
  //   icon: BarChartIcon,
  //   component: SetView('m1'),
  // }, {
  //   path: "征信关注及不良",
  //   icon: BarChartIcon,
  //   component: SetView('m1'),
  // }, {
  //   path: "关联关系信息",
  //   icon: BarChartIcon,
  //   component: SetView('m1'),
  // }, {
  //   path: "上下游企业",
  //   icon: BarChartIcon,
  //   component: SetView('m1'),
  // },
]

export const Menu1 = () => {
  const list = Info.map(item => {
    const CompIcon = item.icon;
    return (
      <ListItem button component={Link} to={`${PARENT_PATH}/${item.path}`} key={item.path}>
        <ListItemIcon>
          <CompIcon />
        </ListItemIcon>
        <ListItemText primary={item.path}/>
      </ListItem>
    )
  })
  return (
    <div>
      {list}
    </div>
  );
}

export const Content1 = () => {
  return (
    <Switch>
      {Info.map(item => (
        <Route
          path={`${PARENT_PATH}/${item.path}`}
          component={item.component}
          key={item.path}
        />
      ))}
    </Switch>
  )
}
