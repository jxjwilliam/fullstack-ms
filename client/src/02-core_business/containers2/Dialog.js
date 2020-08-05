import React, { Component } from 'react'
import {
  Fab,
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import C2_3Form from './C2_3Form'


class Dialog extends Component {

  state =  {
    open: false, 
    save:'1',  
    DialogTitle: '新增',
    isBtn: true,
   ...this.props.exercise
  }
  componentDidMount(){
    // this.props.onRef(this)
}
  getInitState () {
    const { exercise} = this.props
    return exercise || {
        open: false,
      }
  }
  handleToggle = () => {
   
    this.setState({
      open: !this.state.open   
    })
  }
  handleToggle2 = () => {
   
    this.props.handleToggle();

  }

  handleFormSubmit = exercise => {
    // this.handleToggle()
    this.props.FormSubmit(exercise);
    // this.setState({...this.state,save:'新增',DialogTitle:'新增盟信开具制单',open: !this.state.open})
  }

  render () {
    const { open } = this.state
    const exercise= {...this.state}
   
    return (
      <>   
        { exercise.isBtn && <Button onClick={this.handleToggle2} variant="contained" color="primary">{exercise.addBtnName}</Button>} 
        <MuiDialog
          open={open}
          onClose={this.handleToggle}
          fullWidth
          maxWidth='sm'
        >
        <DialogTitle>{exercise.DialogTitle}</DialogTitle>
          <DialogContent>
            {this.props.children}
            {/* <C2_3Form
              exercise = {exercise}
              onSubmit={this.handleFormSubmit}
            /> */}
          </DialogContent>
        </MuiDialog>
      </>
    )
  }
}

export default Dialog
