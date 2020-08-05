import React from 'react';
import getSubRouters from './helper';

export const subRootAry1 = [
  "盟信签收",
  "可用盟信",
  "支付中盟信",
  "已融资盟信",
  "已支付盟信",
  "已到期盟信",
  "原始盟信",
  "盟信支付"
];

const PARENT_PATH = '/核心企业及供应商/盟信流转';
const PATH = '盟信收支';

export default getSubRouters(PARENT_PATH, PATH, subRootAry1);
