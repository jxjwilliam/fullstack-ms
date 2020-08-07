import React from 'react';
import getSubRouters from './helper';

export const subRootAry1 = [
  "POC签收",
  "可用POC",
  "支付中POC",
  "已融资POC",
  "已支付POC",
  "已到期POC",
  "原始POC",
  "POC支付"
];

const PARENT_PATH = '/核心企业及供应商/POC流转';
const PATH = 'POC收支';

export default getSubRouters(PARENT_PATH, PATH, subRootAry1);
