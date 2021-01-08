import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { fetching } from '../../helpers/utils'

// 复核人Reviewer
// 签收已处理
export class InChargeSigned extends Component {
  state = {
    columns: [
      { title: '状态', field: 'status' },
      { title: 'POC编号', field: 'mx_no' },
      { title: '开具方', field: 'issuer' },
      { title: '接收方', field: 'receiver' },
      { title: 'POC金额', field: 'amount' },
      { title: '承兑付款日', field: 'acceptance_payment_date' },
      { title: '开具类型', field: 'issue_type' },
      { title: '开具日期', field: 'issue_date' },
      { title: '操作', field: '' },
    ],
    data: [
      {
        status: '',
        mx_no: '',
        issuer: '',
        receiver: '',
        amount: '',
        acceptance_payment_date: '',
        issue_type: '',
        issue_date: '',
      },
    ],
    title: '签收POC2',
  }

  componentDidMount() {
    fetching('/data/reviewer1').then(data => this.setState({ data }))
  }

  render() {
    const { columns, data, title } = this.state
    return <MaterialTable title={title} columns={columns} data={data} />
  }
}

// 可用POC
export class InChargeAvailable extends Component {
  state = {
    columns: [
      { title: 'POC编号', field: 'mx_no' },
      { title: '开具方', field: 'issuer' },
      { title: '接收方', field: 'receiver' },
      { title: 'POC金额', field: 'amount' },
      { title: '可用金额', field: 'available_amount' },
      { title: '承兑付款日', field: 'acceptance_payment_date' },
      { title: '开具日期', field: 'issue_date' },
      { title: '操作', field: '' },
    ],
    data: [],
    title: '可用POC',
  }

  componentDidMount() {
    fetching('/data/reviewer1').then(data => this.setState({ data }))
  }

  render() {
    const { columns, data, title } = this.state
    return <MaterialTable title={title} columns={columns} data={data} />
  }
}

// 已融资
export class InChargeFinancing extends Component {
  state = {
    columns: [
      { title: 'POC编号', field: 'mx_no' },
      { title: '开具方', field: 'issuer' },
      { title: '接收方', field: 'receiver' },
      { title: '融资金额', field: 'amount' },
      { title: '承兑付款日', field: 'acceptance_payment_date' },
      { title: '开具日期', field: 'issue_date' },
      { title: '操作', field: '' },
    ],
    data: [],
    title: '已融资',
  }

  componentDidMount() {
    fetching('/data/InChargeer1').then(data => this.setState({ data }))
  }

  render() {
    const { columns, data, title } = this.state
    return <MaterialTable title={title} columns={columns} data={data} />
  }
}

// 已承兑
export class InChargeAcceptance extends Component {
  state = {
    columns: [],
    data: [],
    title: '已承兑',
  }

  componentDidMount() {
    fetching('/data/reviewer1').then(data => this.setState({ data }))
  }

  render() {
    const { columns, data, title } = this.state
    return <MaterialTable title={title} columns={columns} data={data} />
  }
}
