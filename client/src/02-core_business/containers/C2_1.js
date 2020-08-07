import React from 'react';
import TabPanels from './TabPanels'
import getSubRouters from './helper';

const PARENT_PATH = '/核心企业及供应商/POC管理';
const PATH = '已开POC';

export const subRootAry = [
  "开立中POC",
  "已开POC",
  "已退回POC",
  "批量审核"
];

// option 1:
export function tabPanels(ary = []) {
  return <TabPanels ary={ary} />;
}

export default getSubRouters(PARENT_PATH, PATH, subRootAry);
