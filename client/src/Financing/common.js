import React from 'react';

export const BASE = '/financing';

const subRouters = [
  '用户中心',
  '盟信管理',
  '盟信融资',
  '人员管理',
  '企业设置'
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});


export default subRouters;