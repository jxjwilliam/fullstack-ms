import React from 'react';
import TabPanels from './TabPanels'

export default function () {
  const ary = [
    '盟信流转审核',
    '可用盟信',
    '支付中盟信',
    '已融资盟信',
    '已支付盟信',
    '已到期盟信',
    '原始盟信',
  ];

  return <TabPanels ary={ary}/>;
}