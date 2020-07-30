import React from 'react';

export const BASE = '/组织架构';

const subRouters = [
  '人员管理',
  '团队管理',
  '权限/角色',
  '团队/项目对应关系',
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export default subRouters;
