import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import { defer, capitalize, fetching } from '../helpers/utils'
import { setHOCView} from "../components";
import {
  Group,
  CheckCircleOutline,
  Business,
  ListAlt,
  AccountCircle,
  SupervisorAccount,
  BusinessCenter,
  BorderBottom,
  Brush,
  TransferWithinAStation,
  Details,
  DirectionsRun,
  Person
} from '@material-ui/icons';

const PARENT_PATH = '现有数据'];

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [{}],
      data: [{}],
      hasToken: sessionStorage.getItem("authToken")
    };
  }

  componentDidMount() {
    fetching('/api/' + this.props.table, { token: this.state.hasToken })
      .then(data => {
        // fix Warning: `value` prop on `input` should not be null.
        // TODO: a better implementation in server-side?
        data.forEach(d => Object.keys(d).forEach(o => (d[o] === undefined || d[o] === null) ? d[o] = '' : ''));
        const columns = Object.keys(data[0]).map(c => ({ path: c, field: c }))
        this.setState({ columns, data })
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
    const { columns, data } = this.state;
    const path = capitalize(this.props.table);
    return (
      <MaterialTable
        path={path}
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

const setView = setHOCView(View);

const ListInfo = [
  {
    path: '用户账户',
    icon: Person,
    component: setView('user')
  },
  {
    path: '角色',
    icon: CheckCircleOutline,
    component: setView('role')
  },
  {
    path: '组织',
    icon: Business,
    component: setView('organization')
  },
  {
    path: '部门列表',
    icon: ListAlt,
    component: setView('department')
  },
  {
    path: '账号细节',
    icon: AccountCircle,
    component: setView('profile')
  },
  {
    path: 'POC管理',
    icon: SupervisorAccount,
    component: setView('admin')
  },
  {
    path: '供应商',
    icon: BusinessCenter,
    component: setView('supplier')
  },
  {
    path: '核心企业',
    icon: BorderBottom,
    component: setView('core-business')
  },
  {
    path: '凭证',
    icon: Brush,
    component: setView('certificate')
  },
  {
    path: '凭证状态查询',
    icon: TransferWithinAStation,
    component: setView('status')
  },
  {
    path: '细节',
    icon: Details,
    component: setView('detail')
  },
  {
    path: '测试',
    icon: DirectionsRun,
    component: setView('test')
  },
]

export const DataViewMenu = () => {
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
        <ListItemText primary={item.path} />
      </ListItem>
    )
  });

  return <>{list}</>;
}

export const DataViewContent = () => {
  return (
    <Switch>
      {ListInfo.map(item => (
        <Route
          path={`${PARENT_PATH}/${item.path}`}
          component={item.component}
          key={item.path}
        />
      ))}
    </Switch>
  )
}
