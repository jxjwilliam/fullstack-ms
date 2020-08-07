import React from 'react';
import TabPanels from './TabPanels'

export default function () {
  const ary = [
    'POC流转审核',
    '可用POC',
    '支付中POC',
    '已融资POC',
    '已支付POC',
    '已到期POC',
    '原始POC',
  ];

  return <TabPanels ary={ary} />;
}