import React from 'react';
import TabPanels from './TabPanels'

export default function() {
  const ary = [
    "开立中盟信",
    "已开盟信",
    "已退回盟信",
    "批量审核结果"
  ];

  return <TabPanels ary={ary} />;
}