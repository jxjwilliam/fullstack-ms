import React from 'react';
import TabPanels from './TabPanels'

export default function () {
  const ary = [
    '盟信待清算',
    '盟信清算中',
    '盟信已清算',
    '扎帐日志',
    '清算日志',
  ];

  return <TabPanels ary={ary}/>;
}
