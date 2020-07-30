import React from 'react';

export const BASE = '/后台管理';

const subRouters = ['风控规则', '警报', '提醒', '日志'].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export default subRouters;
