import React from 'react';
import {TabPanels} from '../../components'

export default function() {
  const ary = [
    '客户评级查询',
    '评级流程查询'
  ];

  return <TabPanels ary={ary} />;
}
