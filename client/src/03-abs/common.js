import React from 'react';

export const BASE = '/存续期管理';

const subRouters = [
  '资金/投资管理',
  '动态管理',
  '信用风控',
  '管理人信息披露报告',
  '多维度信息管理/分析'
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export default subRouters;
