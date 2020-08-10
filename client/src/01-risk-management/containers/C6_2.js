import React from 'react';
import {TabPanels} from '../../components'

export default function () {
  const ary = [
    'POC开立审核',
    '开立中POC',
    '已开POC',
    '已退回POC',
    '批量审核结果',
  ];

  return <TabPanels ary={ary} />;
}
