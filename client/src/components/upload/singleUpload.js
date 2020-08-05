import React, { Component } from 'react'

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { createStyles, Theme, withStyles} from '@material-ui/core/styles';

const styles = (theme) =>
  createStyles({
    root: {
      maxWidth:'1000px'
    },
  });
class Upload extends Component {
   state = {
    value: '',
    name: '',
    open: false,
    open2: false,
    message: '',
    fileList: [],
    imgUrl: ''
   }
   componentWillMount() {
        if(this.props.fileList instanceof Array){
            this.setState({fileList:this.props.fileList})
        }
   }
    handleChange = (e) => {
        const { type='image',uploadName=''} = this.props;
        const formData = new FormData();
        let files =   e.currentTarget.files;
        let type2 = files[0].type;
        let imgUrl = '';
        let fileList = Array.from(files);
        if(files[0].size/1024/1024 >10 ) {
            this.setState({open:true,message:'上传文件大小不能超过10M',value:''});
            return;
        }
        if(type ==='image') {
            if(type2 === 'image/png' || type2 === 'image/jpeg' || type2 === 'image/jpg') {
                if(files[0]){
                    imgUrl = URL.createObjectURL(files[0]);
                }
                this.props.uploadChange({fileList,uploadName})
                 formData.append('image', files[0]);
                // fetch('/api/upload', {
                //   method: 'POST',
                //   body: formData,
                // headers: {
                //     'Content-Type': 'multipart/form-data',
                //   },
                // });
                this.setState({fileList,imgUrl});
            } else {
                this.setState({open:true,message:'上传图片格式只能是jpg/jpeg/png',value:''});
            }
        } else{
            this.setState({fileList});
        }

    }
    //消息提示
    handleClose = () => {
        this.setState({open:false});
    }
    //删除上传文件
    handleUplaodClose = ({target: index}) => {
        let fileList = this.state.fileList;
        fileList.splice(index,1);
        this.setState({fileList,value:''});
    }
    //图片模态框
    handleClose2 = () => {
        this.setState({open2:false});
    }
    //查看实例
    viewFile = ({target: name}) => {
        this.setState({open2:true});
    }
    render() {
        const {message, open, open2, value, imgUrl, fileList} = this.state;

        const {msgClose,uploadClose,disabled=false, fileName=true, viewFile=true,view='查看',name='新增'} = this.props;
        const action = () => {
            if(msgClose){
                return [
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                ]
            } else {
                return []
            }

        }
        return (

            // TODO：上传文件接收的文件类型？
            <div className="uploadBox">
                <div style={{margin:'15px 0'}}>
                    <Button disabled={disabled} variant='contained' style={{position: 'relative',marginRight:'10px', overflow: 'hidden' }}>
                    <input type="file" name="image" value={value} className="uploadFile"  onChange={this.handleChange}></input>
                    {name}
                    </Button>
                    {viewFile && <Button variant='contained' onClick={this.viewFile}>{view}</Button>}
                </div>

                {
                    fileName &&
                    fileList.map((item,index)=>{
                        return (
                            <div key={index} style={{display:'flex',alignItems:'center'}}>
                                 <span title={item.name} className="fileName" style={{margin:'0 10px'}}>{item.name}</span>
                                    { uploadClose && <IconButton
                                        key="close"
                                        aria-label="close"
                                        color="primary"
                                        index={index}
                                        size="small"
                                        onClick={this.handleUplaodClose}
                                    >
                                        <CloseIcon />
                                    </IconButton>}
                            </div>
                        )
                    })
                }

                <Snackbar
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                    open={open}
                    style={{background:'#09f'}}
                    autoHideDuration={4000}
                    onClose={this.handleClose}
                    ContentProps={{
                    'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{message}</span>}
                    action={action()}
                />
                 <Dialog maxWidth={'lg'} onClose={this.handleClose2} aria-labelledby="customized-dialog-title" open={open2}>
                    <MuiDialogTitle style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} id="customized-dialog-title">
                        <span>{view}</span>
                        {/* <IconButton aria-label="close"  onClick={this.handleClose2}>
                            <CloseIcon />
                        </IconButton> */}
                    </MuiDialogTitle>
                    <MuiDialogContent style={{minWidth:'600px',minHeight:'400px'}}>
                        <img src={imgUrl} />
                    </MuiDialogContent>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(Upload);
