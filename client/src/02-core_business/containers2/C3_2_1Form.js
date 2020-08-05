import React, { Component } from 'react'
import {defer, capitalize, fetching} from '../../config/utils';
import axios from 'axios'
import {
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import Uploads from '../../components/Upload'
import {Upload} from '../../components/upload';

import {numberfun,percent} from '../../components/numToText'
import {formatDate} from '../../components/date'

class Form extends Component {
  state = {
    form:this.getInitState(),
    form2:this.props.form2 || {},
    open2:false
  }
  componentDidMount() {

  }
  getInitState () {
    const { exercise} = this.props
    console.log(exercise);
    // const open_day = new Date('2014-08-18T21:11:54');
    const open_day = new Date();
    const form = {
      interest_pay: '',//利息支护方式
      net_financing_amount: '',//净融资额
      Upload_material: '',//上传贸易资料
      mx_amount: '',//盟信金额
      financing_amount: '',//融资金额
      financing_time:open_day,//融资申请时间
      payment_day:open_day,//承诺付款日
      interest:'',//利息
      synthesis_rate: '',//预计综合融资息费率（%)
      remarks: '',  //备注
      sign_agreement:'', //签订协议
      DialogTitle: "",
      status2:'1', //判断是开具还是复核
      check_opinion: '', //审核意见
      save: "1", //判断是新增还是编辑
      imgUrl: ''
    }
    return exercise.save != '1' ? {...form,...exercise} : form
  }

  handleChange = ({ target: { value, name } }) =>{
    let value2 = value;
    const {financing_amount, interest,net_financing_amount} = this.state.form;
    let net_financing_amount2 = net_financing_amount;
    let interest2 = '';
    let financing_amount2 = '';
    if(name === 'sign_agreement'){
      value2 = this.state.form.sign_agreement === '1'?'':'1';
    }  else if (name === 'synthesis_rate'){
      value2 = percent(value2);
    } else if (
      name === 'mx_amount' ||
      name === 'net_financing_amount' 
      ){
      value2 = numberfun(value2,12) ;
    } else if (
      name === 'interest' ||
      name === 'financing_amount'){
        value2 = numberfun(value2,12,2) ;
        financing_amount2 =  name === 'financing_amount' ? value2 : financing_amount;
        interest2 =  name === 'interest' ? value2 : interest;
        net_financing_amount2 =  (Number(financing_amount2) -  Number(interest2)).toFixed(2);
    }
    this.setState({
      form:{...this.state.form,[name]: value2,net_financing_amount:net_financing_amount2}
    })
   
  }
  //融资申请时间
  handleChangeStartTime = (data) => {
    console.log(data);
    if(data) {
      this.setState({form:{...this.state.form, financing_time:data}})
    } else {
      this.setState({form:{...this.state.form, financing_time:new Date()}})
    }
  }
    //付款日
  handleChangeEndTime = (data) => {
    console.log('data',data);
    if(data) {
      this.setState({form:{...this.state.form, payment_day:data}})
    } else {
      this.setState({form:{...this.state.form, payment_day:new Date()}})
    }
  }
  //保存 提交
  handleSubmit = (e) =>{

    const {financing_time,payment_day,save,id} = this.state.form;
    let form = this.state.form ;
    const text = e.target.innerText || '保存';
    let method = save === '2' ? 'PUT' : 'POST';
    let ids = save === '2' ? id: '';
    form.formDate = new Date(); //表单提交时间，更新表格
      //日期转换
      if(financing_time instanceof Object) {
        if(financing_time.getTime()) {
          form.financing_time = formatDate(financing_time,'yyyy/MM/dd');
        } else {
          alert('请把流转日期填写完整');
          return ;
        } 
      } 
      if(payment_day instanceof Object) {
        if(payment_day.getTime()) {
          form.payment_day = formatDate(payment_day,'yyyy/MM/dd');  
        } else {
          alert('请把承若付款日填写完整');
          return ;
        } 
      }
        
        //提交表单
        if(text === '提交'){
          fetching('/api/circulation/'+ids, {
            method,
            // token: this.state.hasToken,
            body: JSON.stringify(this.state.form)
          }).then((data) => {
            console.log('提交',data);
            this.props.onSubmit({
              ...form,                          
              submit_name: text
            })
          })
      } else if(text === '保存'){
        this.props.onSubmit({
            ...form,          
            submit_name: text
          })
      }
}
//图片上传
uploadChange = file => {
  console.log('file',file);
  this.setState({form:{...this.state.form,[file.uploadName]:file.uploadName}})
}
//查看协议
viewAgreement = () => {
  this.setState({open2:!this.state.open2})
}
  render () {
    const {
      imgUrl,mx_amount,financing_amount,financing_time,interest,interest_pay,sign_agreement,
      check_opinion,remarks,net_financing_amount,payment_day,synthesis_rate } = this.state.form;
    const form2 = this.state.form2;
    const { exercise } = this.props;

    const status = () =>{
      if(exercise.status2 === '1'){
        return <div style={{padding:'10px 0'}}>
            <Button
            color='primary'
            variant='contained'
            onClick={this.handleSubmit}
            disabled={false}
            name={form2.save}
            style={{marginRight:'10px'}}
          >
            {form2.save}
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={this.handleSubmit}
            disabled={false}
            name= {form2.submit}
            style={{marginRight:'10px'}}
          >
             {form2.submit}
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={this.handleSubmit}
            name= {form2.revocation}
            disabled={false}
            style={{marginRight:'10px'}}
          >
             {form2.revocation}
          </Button>
        </div>
      } else if(exercise.status2 === '2'){
        return  <div style={{padding:'10px 0'}}>
            <Button
              color='primary'
              variant='contained'
              onClick={this.handleSubmit}
              disabled={false}
              name= {form2.check}
              style={{marginRight:'10px'}}
            >
             {form2.check}
            </Button>
          <Button
            color='primary'
            variant='contained'
            name= {form2.send_back}
            onClick={this.handleSubmit}
            disabled={false}
          >
            {form2.send_back}
          </Button>
        </div>
      }

    }
    return (
      <form>
       <Grid   container justify="space-between">
            <Grid item xs={5}>
                <TextField
                  label={form2.mx_amount}
                  value={mx_amount}
                  name='mx_amount'
                  onChange={this.handleChange}
                  margin='normal'
                  fullWidth
                  disabled={exercise.save === '3'}
                />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label={form2.financing_amount}
                value={financing_amount}
                name='financing_amount'
                onChange={this.handleChange}
                margin='normal'
                fullWidth
                disabled={exercise.save === '3'}
              />
            </Grid>
        </Grid>

          <Grid   container justify="space-between">
            <Grid item xs={5}>
                  <TextField
                label={form2.synthesis_rate}
                value={synthesis_rate}
                name='synthesis_rate'
                onChange={this.handleChange}
                margin='normal'
                fullWidth
                disabled={exercise.save === '3'}
              />
            </Grid>
            <Grid item xs={5}>
                    <TextField
                  label={form2.interest}
                  value={interest}
                  name='interest'
                  onChange={this.handleChange}
                  margin='normal'
                  fullWidth
                  disabled={exercise.save === '3'}
                />
            </Grid>

        </Grid>
        <Grid   container justify="space-between">
            <Grid item xs={5}>
                  <TextField
                label={form2.interest_pay}
                value={interest_pay}
                name='interest_pay'
                onChange={this.handleChange}
                margin='normal'
                fullWidth
                disabled={exercise.save === '3'}
              />
            </Grid>
            <Grid item xs={5}>
                <TextField
                  label={form2.net_financing_amount}
                  value={net_financing_amount}
                  name='net_financing_amount'
                  onChange={this.handleChange}
                  margin='normal'
                  fullWidth
                  disabled={true}
                />
            </Grid>

        </Grid>
        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-between">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label={form2.financing_time}
                disabled={exercise.save === '3'}
                value={financing_time}
                onChange={this.handleChangeStartTime}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                disabled={exercise.save === '3'}
                id="date-picker-inline"
                label={form2.payment_day}
                value={payment_day}
                onChange={this.handleChangeEndTime}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>

       <div style={{padding:'10px 0'}}>
          <FormControlLabel
            control={
              <Checkbox    disabled={exercise.save === '3'} checked={sign_agreement === '1'}  name='sign_agreement' onChange={this.handleChange} />
            }
            label={form2.sign_agreement}
          />
          <Button onClick={this.viewAgreement} style={{marginLeft:'10px'}} variant='contained'>{form2.view_agreement}</Button>
        </div>

        <Grid container justify="space-between">
          <Grid item xs={5}>
            <Upload disabled={exercise.status2 === '2' || exercise.save === '3'} uploadName='Upload_contracts' name={form2.Upload_contracts} view={form2.view_case} uploadChange={this.uploadChange}></Upload>
          </Grid>
          <Grid item xs={5}>
             <Upload disabled={exercise.status2 === '2' || exercise.save === '3'} uploadName='Upload_invoice' name={form2.Upload_invoice} view={form2.view_case}  uploadChange={this.uploadChange}></Upload>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Grid item xs={5}>
              <Upload disabled={exercise.status2 === '2' || exercise.save === '3'} uploadName='Upload_dispatch' name={form2.Upload_dispatch} view={form2.view_case} uploadChange={this.uploadChange}></Upload>
          </Grid>
          <Grid item xs={5}>
             <Upload disabled={exercise.status2 === '2' || exercise.save === '3'} uploadName='Upload_shipping' name={form2.Upload_shipping} view={form2.view_case} uploadChange={this.uploadChange}></Upload>
          </Grid>
        </Grid>


        <TextField
          multiline
          rows='4'
          label={form2.remarks}
          value={remarks}
          name='remarks'
          onChange={this.handleChange}
          margin='normal'
          fullWidth
          disabled={exercise.save === '3'}
        />
        {
          exercise.status2 === '2'
          && <TextField
              multiline
              rows='4'
              label={form2.check_opinion}
              value={check_opinion}
              name='check_opinion'
              onChange={this.handleChange}
              margin='normal'
              fullWidth
              disabled={false}
            />
        }

        {
         status()
        }
         <Dialog maxWidth={'md'} onClose={this.viewAgreement} aria-labelledby="customized-dialog-title" open={this.state.open2}>
              <MuiDialogTitle style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} id="customized-dialog-title">
                <span>{form2.view_agreement}</span>
              </MuiDialogTitle>
              <MuiDialogContent style={{minWidth:'600px',minHeight:'400px'}}>
                  <img src={imgUrl} />
              </MuiDialogContent>
          </Dialog>
      </form>
    )
  }
}

export default Form
