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
import {Upload,Uploads} from '../../components/upload';
import {numberParseChina,numberfun,percent} from '../../components/numToText'
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
    console.log(exercise,new Date('2019/01/22'));
    // const open_day = new Date('2014-08-18T21:11:54');
    const open_day = new Date();
    const form = {
      status: '',//状态
      extraction: '',//开立方
      receive: '',//接收方
      amount: '',//金额
      amount_capital: '', //金额大写
      open_day:open_day,//开立日
      payment_day:open_day,//承诺付款日
      synthesis_rate: '',//预计综合融资息费率（%)
      remarks: '',  //备注

      open_credit_code: '',//开立方信用代码
      receive_credit_code: '',//接收方信用代码
      usable_amount: '',//可用额度
      usable_amount_capital: '',//可用额度大写
      Upload_contracts: "", //上传合同
      Upload_invoice: "", //上传发票
      Upload_dispatch: "",//上传发货单
      Upload_shipping: "",//上传运输单
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
    let amount_capital = this.state.form.amount_capital;
    let usable_amount_capital = this.state.form.usable_amount_capital;
    if(name === 'sign_agreement'){
      value2 = this.state.form.sign_agreement === '1'?'':'1';
    } else if (name === 'usable_amount'){
      value2 = numberfun(value2,12) ;
      usable_amount_capital =  numberParseChina(value2);

    } else if (name === 'amount'){
      value2 = numberfun(value2,12) ;
      amount_capital =  numberParseChina(value2);
    } else if (name === 'synthesis_rate'){
      value2 = percent(value2);
    }
    this.setState({
      form:{...this.state.form,[name]: value2,amount_capital,usable_amount_capital}
    })
  }
  //开立日
  handleChangeStartTime = (data) => {
    console.log('date',data);
    if(data ===null) {
      this.setState({form:{...this.state.form, open_day:new Date()}})
    } else {
      this.setState({form:{...this.state.form, open_day:data}})
    }
  }
    //付款日
  handleChangeEndTime = (data) => {
    // console.log('date',data instanceof Date);
     console.log('date',data);
    if(data ===null ) {
      this.setState({form:{...this.state.form, payment_day:new Date()}})
    } else {
      this.setState({form:{...this.state.form, payment_day:data}})
    }
  }
  //保存 提交
  handleSubmit = (e) =>{
    const {open_day,payment_day,save,id} = this.state.form;
    let form = this.state.form ;
    const text = e.target.innerText || '保存';
    let method = save === '2' ? 'PUT' : 'POST';
    let ids = save === '2' ? id: '';
    form.formDate = new Date(); //表单提交时间，更新表格
    console.log(open_day,payment_day,text,save);
    //日期转换
    if(open_day instanceof Object) {
      if(open_day.getTime()) {
        form.open_day = formatDate(open_day,'yyyy/MM/dd');
      } else {
        alert('请把开立日填写完整');
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
        fetching('/api/issue/'+ids, {
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
    const {imgUrl,usable_amount_capital,amount_capital,
      sign_agreement,check_opinion,remarks, open_credit_code,
      receive_credit_code,usable_amount,amount,open_day,payment_day,
      synthesis_rate, extraction, receive } = this.state.form;
    const form2 = this.state.form2;
    const { exercise} = this.props;

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
                  label={form2.extraction}
                  value={extraction}
                  name='extraction'
                  onChange={this.handleChange}
                  margin='normal'
                  fullWidth
                  disabled={exercise.save === '3'}
                />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label={form2.open_credit_code}
                value={open_credit_code}
                name='open_credit_code'
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
                label={form2.receive}
                value={receive}
                name='receive'
                onChange={this.handleChange}
                margin='normal'
                fullWidth
                disabled={exercise.save === '3'}
              />
            </Grid>
            <Grid item xs={5}>
                    <TextField
                  label={form2.receive_credit_code}
                  value={receive_credit_code}
                  name='receive_credit_code'
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
                label={form2.usable_amount}
                value={usable_amount}
                name='usable_amount'
                onChange={this.handleChange}
                margin='normal'
                fullWidth
                disabled={exercise.save === '3'}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                  label={form2.usable_amount_capital}
                  value={usable_amount_capital}
                  title={usable_amount_capital}
                  name='usable_amount'
                  margin='normal'
                  fullWidth
                  disabled={true}
                />
            </Grid>

          </Grid>

          <Grid   container justify="space-between">
            <Grid item xs={5}>
                  <TextField
                label={form2.amount}
                value={amount}
                name='amount'
                onChange={this.handleChange}
                margin='normal'
                fullWidth
                disabled={exercise.save === '3'}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                 label={form2.amount_capital}
                 name='amount'
                 title={amount_capital}
                 value={amount_capital}
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
                label={form2.open_day}
                disabled={exercise.save === '3'}
                value={open_day}
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
        <Grid item xs={12}>
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
            <Upload disabled={exercise.status2 === '2' || exercise.save === '3'}
             uploadName='Upload_contracts' name={form2.Upload_contracts} view={form2.view_case}
              uploadChange={this.uploadChange}></Upload>
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
