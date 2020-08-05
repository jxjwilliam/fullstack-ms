export const BASE = '/客户信息';

export const subRouters = [
  '客户基本信息',
  '财务信息',
  '评级限额信息',
  '风险信息',
  '关联信息',
  '现有数据',
  '帮助'
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export const mock3 = [
  'c1-1-1',
  'c1-1-2',
  'c1-1-3',
  'c1-1-4',
  'c1-1-5',
  'c1-2',
  'c1-3',
  'c1-4',
  'c2-1',
  'c3-1',
  'c4-1-1',
  'c4-1-2',
  'c4-2',
  'c5-1',
  'c5-2'
];
