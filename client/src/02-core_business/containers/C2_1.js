import React from 'react';
import TabPanels from './TabPanels'
import getSubRouters from './helper';

const PARENT_PATH = '/核心企业及供应商/盟信管理';
const PATH = '已开盟信';

export const subRootAry = [
  "开立中盟信",
  "已开盟信",
  "已退回盟信",
  "批量审核"
];

// option 1:
export function tabPanels(ary = []) {
  return <TabPanels ary={ary}/>;
}

export default getSubRouters(PARENT_PATH, PATH, subRootAry);
