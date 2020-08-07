import React, {Component} from 'react';
export const BASE = '/核心企业及供应商';

const subRouters = [
  '盟信额度',
  '盟信管理',
  '盟信流转',
  '还款管理'
].reduce((obj, url) => {
  obj[url] = `${BASE}/${url}`;
  return obj;
}, {});

export default subRouters;

const setView = Comp => collection => {
  return class extends Component {
    render() {
      return <Comp table={collection} {...this.props} />
    }
  }
}

class View extends Component {
  render() {
    return (
      <h1>02-core-business-setView</h1>
    )
  }
}

export const SetView = setView(View);
