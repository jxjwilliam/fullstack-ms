import React from 'react';
import TabPanels from './TabPanels'

export default function() {
  const ary = [
    '关联客户名单查询维护',
    '单一客户管理',
    '集团客户管理',
    '集团客户识别认定',
  ];

  return <TabPanels ary={ary} />;
}