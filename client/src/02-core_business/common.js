import React, { Component } from 'react';
import {setHOCView} from "../components/layout/jsx";

export const BASE = '/核心企业及供应商';

const subRouters = [
  'POC额度',
  'POC管理',
  'POC流转',
  '还款管理'
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export default subRouters;

class View extends Component {
  render() {
    return (
      <h1>02-core-business-setView</h1>
    )
  }
}

export const SetView = setHOCView(View);
