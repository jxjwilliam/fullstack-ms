import React from 'react';
import {TabPanels} from '../../components'

export default function() {
  const ary = [
    "融资申请中",
    "融资进展",
    "放款异常"
  ];

  return <TabPanels ary={ary} />;
}

