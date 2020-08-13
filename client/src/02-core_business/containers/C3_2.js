import React from 'react';
import getSubRouters from './helper';

export const subRootAry2 = [
  "融资申请",
  "融资查看",
  "询价记录",
  "融资申请中",
  "融资进展",
  "放款异常"
];


const PARENT_PATH = '/核心企业/POC流转';
const PATH = 'POC融资';

export default getSubRouters(PARENT_PATH, PATH, subRootAry2);

