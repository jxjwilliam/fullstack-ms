import React from 'react';

export const BASE = '/供应商';

const subRouters = [
  'POC额度',
  'POC管理',
  'POC流转',
  '还款管理',
  '列表',
  '帮助'
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export default subRouters;
