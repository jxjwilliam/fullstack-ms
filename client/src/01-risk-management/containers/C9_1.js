import React from 'react';
import TabPanels from '../../components/tabs/TabPanels'

export default function () {
  const ary = [
    'POC待清算',
    'POC清算中',
    'POC已清算',
    '扎帐日志',
    '清算日志',
  ];

  return <TabPanels ary={ary} />;
}
