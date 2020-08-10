import React from 'react';
import TabPanels from '../../components/tabs/TabPanels'

export default function() {
  const ary = [
    '客户类型变更',
    '财务报表识别'
  ];

  return <TabPanels ary={ary} />;
}
