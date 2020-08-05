import React from 'react';

export const BASE = '/供应商';

const subRouters = [
  '盟信额度',
  '盟信管理',
  '盟信流转',
  '还款管理',
  '列表',
  '帮助'
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export default subRouters;
