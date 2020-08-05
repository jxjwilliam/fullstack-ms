import React from 'react';
import getSubRouters from './helper';

export const subRootAry3 = [
  "待处理",
  "已处理"
];

const PARENT_PATH = '/核心企业及供应商/盟信流转';
const PATH = '转让回执';

export default getSubRouters(PARENT_PATH, PATH, subRootAry3);

