import React from 'react';
import {TabPanels} from '../../components'
import getSubRouters from './helper';

const PARENT_PATH = '/核心企业/POC管理';
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
