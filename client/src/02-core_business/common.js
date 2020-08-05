import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import {
  ContactSupport,
  Shop,
  Apps,
  People,
  HelpOutline,
  ViewComfy,
  ArrowBack,
  Backup
} from '@material-ui/icons'
import MaterialTable from 'material-table';
import {defer, capitalize, fetching} from '../config/utils';
import {core_business_url} from './core_business_url';
import {C1_1} from './containers'
import {Dialog,C2_3Form,C3_1_8Form,C3_2_1Form} from './containers2'
import { f2_3, f3_1_8, f3_2_1, common} from './formStatic'
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

// copied from 05-.../DataView.js
class View extends Component {
  state = {
    columns: [{}],
    data: [],
    hasToken: sessionStorage.getItem("authToken"),
    dataUrl: {},
    id: 8888,
    form2 : {...common},
    exercise: {
      save:'1',
      DialogTitle:'新增盟信开具制单',
      open: false,
      status2: '1'
    }

  };

  componentDidMount() {
    fetching('/mock/' + this.props.table, {token: this.state.hasToken})
      .then(data => {
        const columns = Object.keys(data).map(c => ({title: data[c], field: c}));
        //根据不同的页面，获取不同的接口地址，渲染不同的数据
      const dataUrl=core_business_url.find(item => item.name === this.props.table);
      
       console.log('dataUrl',dataUrl);
        this.setState({columns,dataUrl:dataUrl});
        // dataUrl.url.query !=='' && this.onQuery();
      })  
  }
  
    //查询数据 
  onQuery = () => {
    const {url } = this.state.dataUrl ;
      fetching( url.query).then(data => {                  
              console.log('data',data);           
                this.setState({data:data});                             
        })         
     
    }
    //查询单条数据 
  onQueryRow = (id = '') => {
    const {url } = this.state.dataUrl ;
      fetching( url.query + id).then(data => {                  
              return data;       
        })         
     
    }
  onRef = (ref) => {
    this.child  = ref
}

  //  table新增
  onAdd = newData => {
    let data = this.state.data;
    data.unshift(newData);
    this.setState({data})
    return defer(0).then(console.log('newData ---: ', newData));
  }
  //表单新增
  FormSubmit = (newData) => {
    console.log('newData',newData);
    
    let data = this.state.data;
    if(newData.submit_name === '保存' && newData.save ==='1') {
      newData.id = this.state.id;
      newData.status = '已保存';
      data.unshift(newData);
    } else if(newData.submit_name === '保存' && newData.save ==='2'){
      let index = this.findObject(newData,data);   
      newData.status = '已保存';
      data[index] = newData;
    } else if(newData.submit_name === '提交' && newData.save ==='1' && newData.status2 ==='1'){
      this.onQuery();    
    } else if(newData.submit_name === '提交' && newData.save ==='2' && newData.status2 ==='1'){
      this.onQuery();    
    } else if(newData.submit_name === '审核' && newData.save ==='2' && newData.status2 ==='2'){
      let index = this.findObject(newData,data);
      newData.status = '已审核';
      data[index] = newData;
    } else if(newData.submit_name === '退回' && newData.save ==='2' && newData.status2 ==='2'){
      let index = this.findObject(newData,data);
      newData.status = '已退回';
      data[index] = newData;
    }
    this.setState({data:JSON.parse(JSON.stringify(data)),id:this.state.id+1,exercise:{...this.state.exercise,open:false}})
    console.log('data22',this.state.data);

  }
  // 对象查找
  findObject = (obj,data) => {
      let index = data.findIndex( item => item.id === obj.id );
      return index;
  }
  //新增
  handleToggle = () => {
    const { form2 } = this.state
    let status2 = ''
    if(this.props.table === 'm2-3' || 
      this.props.table === 'm3-1-8' ||
      this.props.table === 'm3-2-1') {
        status2 = '1'
    } 
    this.setState({
      exercise:{...this.state.exercise,status2,DialogTitle:form2.add,save:'1',open:true}   
    })
   
  }
    //编辑
  onUpdate = (newData, oldData) => {
     
    return defer(60).then(console.log(' newData, oldData ---: ', newData, oldData));
  }
//删除
  onDelete = oldData => {  
    return defer(60).then(console.log('oldData ---: ', oldData));
  }
  //编辑开具制单
    onUpdate2 = (e,row) => {
      const { form2} = this.state
      let status2 = ''
      if(this.props.table === 'm2-3' || 
        this.props.table === 'm3-1-8' ||
        this.props.table === 'm3-2-1') {
          status2 = '1'
      }
    if( row.id > 8000){
      console.log('row',row);
      this.setState({exercise:{...row,save:'2',DialogTitle:form2.edit,status2,open:true,}});
    } else {
        this.onQueryRow(row.id).then( data => {
          this.setState({exercise:{...data,save:'2',DialogTitle:form2.edit,status2,open:true,}});
        })  
    }
    
      
  
  }

  //查看开具制单1
  onview = (e,row) => {
    const { form2 ,dataUrl} = this.state
    if( row.id > 8000){
      console.log('row',row);
      this.setState({exercise:{...row,save:'3',status2:'',DialogTitle:form2.view,open:true,}});
    } else {
      this.onQueryRow(row.id).then( data => {
        this.setState({exercise:{...data,save:'3',status2:'',DialogTitle:form2.view,open:true,}});
      })  
      //   fetching( dataUrl.url.query + row.id).then(data => {                  
      //     console.log('rowdata',data); 
      // }) 
    } 
    
  }
  //开具复核-审核
  onCheck = (e,row) => {
    const { form2 } = this.state
    console.log('row',row);
    let status2 = ''
    if(this.props.table === 'm2-4'){
      status2 = '2'
    }
    this.setState({exercise:{...row,save:'2',DialogTitle:form2.check,status2,open:true,}});

  }

  //搜索框Change 
  onSearchChange = (query) => {
    console.log('onSearchChange',query);
  }
  //页面更改事件
  onChangePage = (query) => {
    console.log('onChangePage',query);
  }
   //处理每页的行更改（pageSize）
   onChangeRowsPerPage = (query) => {
    console.log('onChangeRowsPerPage',query);
  }
  render() {
    const {columns, data, exercise} = this.state;  
    const path = capitalize(this.props.table);
    const actions = actions2(this,this.props.table);
    const editable = editable2(this,this.props.table);    
    const C2_3 = ()=>{
      let isBtn = this.props.table === 'm2-3' ?true:false;
      return  <div className="dovbox" style={{justifyContent: 'flex-end'}}>
        <Dialog handleToggle={this.handleToggle} exercise={{...exercise,pageNmaes:this.props.table,addBtnName:common.addBtnName1,isBtn}}>
          <C2_3Form form2={{...common,...f2_3}} exercise = {{...exercise,pageNmaes:this.props.table}} onSubmit={this.FormSubmit} />   
        </Dialog>
        </div>
    } 
    const C3_1_8 = ()=>{
      return  <div className="dovbox" style={{justifyContent: 'flex-end'}}>
        <Dialog handleToggle={this.handleToggle}  exercise={{...exercise,pageNmaes:this.props.table,addBtnName:common.addBtnName2}}>
            <C3_1_8Form form2={{...common,...f3_1_8}} exercise = {{...exercise,pageNmaes:this.props.table}} onSubmit={this.FormSubmit} />            
        </Dialog>
        </div>
    } 
    const C3_2_1 = ()=>{
      return  <div className="dovbox" style={{justifyContent: 'flex-end'}}>
        <Dialog handleToggle={this.handleToggle}  exercise={{...exercise,pageNmaes:this.props.table,addBtnName:common.addBtnName3}}>
            <C3_2_1Form form2={{...common,...f3_2_1}} exercise = {{...exercise,pageNmaes:this.props.table}} onSubmit={this.FormSubmit} />            
        </Dialog>
        </div>
    } 
    return <div>
      {this.props.table ==='m1' && <C1_1></C1_1>}
      {(this.props.table ==='m2-3' || this.props.table ==='m2-4') && <C2_3></C2_3>}
      {(this.props.table ==='m3-1-8') && <C3_1_8></C3_1_8>}
      {(this.props.table ==='m3-2-1') && <C3_2_1></C3_2_1>}
      <MaterialTable
       title={this.state.dataUrl.title}
       onSearchChange={this.onSearchChange}
       onChangePage={this.onChangePage}
       onChangeRowsPerPage={this.onChangeRowsPerPage}
        path={path}
        columns={columns}
        data={data}      
        actions={actions}
        editable={editable}
        localization = {localization}
        options = {options}
      />
    </div>
  }
}
const actions2 = (that,name)=>{
  console.log('name',name);
  let actions = [];
  switch(name) {
    case 'm1':
      actions = [];   
      break;          
    case 'm2-3':
        actions = [{icon: 'save',tooltip: '编辑',onClick:that.onUpdate2},{icon: ViewComfy,tooltip:'查看',onClick:that.onview}];   
        break;  
    case 'm2-4':
          actions = [{icon: 'save',tooltip: '审核',onClick:that.onCheck}];   
          break; 
    case 'm3-1-8':
          actions = [{icon: 'save',tooltip: '编辑',onClick:that.onUpdate2},{icon: ViewComfy,tooltip:'查看',onClick:that.onview}];     
          break; 
    case 'm3-2-1':
          actions = [{icon: 'save',tooltip: '编辑',onClick:that.onUpdate2},{icon: ViewComfy,tooltip:'查看',onClick:that.onview}];     
          break; 
    default :
      actions = [];
  }
  return actions;
}
const editable2 = (that,name)=>{
  let editable = {};
  switch(name) {
    case 'm1':
      editable = {onRowAdd: that.onAdd,};   
      break;   
    case 'm2-1':
      editable = {onRowAdd: that.onAdd,};   
      break;
    case 'm2-2':
      editable = {onRowAdd: that.onAdd,};   
      break;
    case 'm2-3':
        editable = {};   
        break;
    default :
      editable = {};  
  }
  return editable;
}
const localization = {
  header:{
    actions: '操作'
  }
}
const options = {
  actionsCellStyle:{padding:'0 10px'},
  headerStyle: { //表格头部
    backgroundColor: '#039be5',
    color: '#FFF',   
  },
  rowStyle: { //表行
    backgroundColor: '#fff',
  },
  sorting: true,  //排序
  // selection: true //多选框
}
const setView = Comp => collection => {
  return class extends Component {
    render() {
      return <Comp table={collection} {...this.props} />
    }
  }
}

export const SetView = setView(View);

// TEMP for mock
export const mock1 = [
  'm1',
  'm2-1',
  'm2-2',
  'm2-3',
  'm2-4',
  'm2-5-1',
  'm2-5-2',
  'm2-5-3',
  'm2-5-4',
  'm3-1-1',
  'm3-1-2',
  'm3-1-3',
  'm3-1-4',
  'm3-1-5',
  'm3-1-6',
  'm3-1-7',
  'm3-1-8',
  'm3-2-1',
  'm3-2-2',
  'm3-2-3',
  'm3-2-4',
  'm3-2-5',
  'm3-3-1',
  'm3-3-2',
  'm4-1',
  'm4-2',
  'm4-3',
];

// deprecated
const icons = [
  People, Apps, Shop, ContactSupport, HelpOutline
];
// deprecated
const setupRouters = (routers) => {
  return routers.map((r, i) => ({
    path: `${BASE}/${r}`,
    title: r,
    icon: icons[i],
  }));
};

