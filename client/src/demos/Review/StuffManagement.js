import React, {Component} from 'react';
import MaterialTable from 'material-table';
import {fetching} from '../../helpers/utils'

// 复核人Reviewer
// 人员管理
export  default class extends Component {
  state = {
    columns: [
      {title: '状态', field: 'status'},
      {title: '姓名', field: 'name'},
      {title: '手机号', field: 'cell'},
      {title: '证件类型', field: 'certificate_type'},
      {title: '证件号码', field: 'certificate_no'},
      {title: '邮箱', field: 'email'},
      {title: '管理员', field: 'isManager'},
      {title: '角色', field: 'role'},
    ],
    data: [],
    title: '人员管理'
  }

  componentDidMount() {
    fetching('/data/stuff')
      .then(data => {
        console.log(data);
        this.setState({data})
      })
  }

  render() {
    console.log('--- william test [state] ---:', this.state);
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
