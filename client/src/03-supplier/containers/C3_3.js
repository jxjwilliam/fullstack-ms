import React from 'react';
import {TabPanels} from '../../components'

export default function () {
  const ary = [
    "待处理",
    "已处理"
  ];

  return <TabPanels ary={ary}/>;
}
