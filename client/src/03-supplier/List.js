import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import MaterialTable from 'material-table';
import * as userAction from '../state/actions/accountAction';
import {defer} from '../helpers/utils'
import subRouters from './common';

const PARENT_PATH = subRouters['列表'];

class List extends Component {

  state = {
    columns: [
      {path: '角色', field: 'Role'},
      {path: '账户名', field: 'account'},
      {path: '用户名', field: 'name'},
      {path: '公司', field: 'company'},
      {path: '部门', field: 'department'},
      {path: '邮件', field: 'email'},
      {path: '电话', field: 'phone'},
      {path: '职位', field: 'position'},
    ],
    data: [{}],
    hasToken: sessionStorage.getItem("authToken")
  };

  componentDidMount() {
    this.props.getUsersAction(this.state.hasToken)
      .then(() => {
      this.setState({data: this.props.users})
      })
  }

  onAdd = newData => {
    return defer(0).then(console.log('--- newData ---: ', newData));
  }

  onUpdate = (newData, oldData) => {
    return defer(60).then(console.log('--- newData, oldData ---: ', newData, oldData));
  }

  onDelete = oldData => {
    return defer(60).then(console.log('--- oldData ---: ', oldData));
  }

  render() {
    const {columns, data} = this.state;
    return (
      <MaterialTable
        path="供应商用户管理"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: this.onAdd,
          onRowUpdate: this.onUpdate,
          onRowDelete: this.onDelete,
        }}
      />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  userAction, dispatch
);

List = connect(state => ({
  auth: state.auth,
  users: state.users,
}), mapDispatchToProps)(List);

const ListInfo = [
  {
    path: '账户管理',
    icon: BarChartIcon,
    component: List,
  },
  {
    path: '信息1',
    icon: LayersIcon,
    component: List,
  },
  {
    path: '信息2',
    icon: PeopleIcon,
    component: List,
  }
];

export const ListMenu = () => {
  const list = ListInfo.map(item => {
    const CompIcon = item.icon;
    return (
      <ListItem
        button
        component={Link}
        to={`${PARENT_PATH}/${item.path}`}
        key={item.path}>
        <ListItemIcon>
          <CompIcon />
        </ListItemIcon>
        <ListItemText primary={item.path}/>
      </ListItem>
    )
  });

  return (
    <div>
      {list}
    </div>
  );
}

export const ListContent = () => {
  return (
    <Switch>
      {ListInfo.map(item => (
        <Route
          path={`${PARENT_PATH}/${item.path}`}
          component={item.component}
          key={item.path}
        />
      ))
      }
    </Switch>
  )
}
