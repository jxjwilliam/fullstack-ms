import React, {Component} from 'react';
import MaterialTable from 'material-table';
import {fetching} from '../../config/utils'

// 复核人Reviewer
// 签收已处理
export class ReviewSigned extends Component {
  state = {
    columns: [
      {title: '状态', field: 'status'},
      {title: '盟信编号', field: 'mx_no'},
      {title: '开具方', field: 'issuer'},
      {title: '接收方', field: 'receiver'},
      {title: '盟信金额', field: 'amount'},
      {title: '承兑付款日', field: 'acceptance_payment_date'},
      {title: '开具类型', field: 'issue_type'},
      {title: '开具日期', field: 'issue_date'},
      {title: '操作', field: ''},
    ],
    data: [{
      status: '',
      mx_no: '',
      issuer: '',
      receiver: '',
      amount: '',
      acceptance_payment_date: '',
      issue_type: '',
      issue_date: ''
    }],
    title: '签收盟信1'
  }

  componentDidMount() {
    fetching('/data/reviewer1')
      .then(data => this.setState({data}))
  }

  render() {
    const {columns, data, title} = this.state;
    return (
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
      />
    )
  }
}

// 可用盟信
export class ReviewAvailable extends Component {
  state = {
    columns: [
      {title: '盟信编号', field: 'mx_no'},
      {title: '开具方', field: 'issuer'},
      {title: '接收方', field: 'receiver'},
      {title: '盟信金额', field: 'amount'},
      {title: '可用金额', field: 'available_amount'},
      {title: '承兑付款日', field: 'acceptance_payment_date'},
      {title: '开具日期', field: 'issue_date'},
      {title: '操作', field: ''},
    ],
    data: [{
      mx_no: '',
      issuer: '',
      receiver: '',
      amount: '',
      available_amount: '',
      acceptance_payment_date: '',
      issue_date: '',
    }],
    title: '可用盟信'
  }

  componentDidMount() {
    fetching('/data/reviewer1')
      .then(data => this.setState({data}))
  }

  render() {
    const {columns, data, title} = this.state;
    return (
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
      />
    )
  }
}

// 已融资
export class ReviewFinancing extends Component {
  state = {
    columns: [
      {title: '盟信编号', field: 'mx_no'},
      {title: '开具方', field: 'issuer'},
      {title: '接收方', field: 'receiver'},
      {title: '盟信金额', field: 'amount'},
      {title: '可用金额', field: 'available_amount'},
      {title: '承兑付款日', field: 'acceptance_payment_date'},
      {title: '开具日期', field: 'issue_date'},
      {title: '操作', field: ''},
    ],
    data: [],
    title: '已融资',
  }

  componentDidMount() {
    fetching('/data/reviewer1')
      .then(data => this.setState({data}))
  }

  render() {
    const {columns, data, title} = this.state;
    return (
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
      />
    )
  }
}

// 已承兑
export class ReviewAcceptance extends Component {
  state = {
    columns: [
      {title: '盟信编号', field: 'mx_no'},
      {title: '开具方', field: 'issuer'},
      {title: '接收方', field: 'receiver'},
      {title: '盟信金额', field: 'amount'},
      {title: '可用金额', field: 'available_amount'},
      {title: '承兑付款日', field: 'acceptance_payment_date'},
      {title: '开具日期', field: 'issue_date'},
      {title: '操作', field: ''},
    ],
    data: [],
    title: '已承兑',
  }

  componentDidMount() {
    fetching('/data/reviewer1')
      .then(data => this.setState({data}))
  }

  render() {
    const {columns, data, title} = this.state;
    return (
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
      />
    )
  }
}
