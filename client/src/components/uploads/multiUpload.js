import React, { Component } from 'react'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    maxWidth: '1000px',
  },
}

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      open: false,
      open2: false,
      message: '',
      fileList: [],
      imgUrl: '',
      image: { images: '' },
    }
  }

  componentDidMount() {
    const { fileList } = this.props
    if (fileList instanceof Array) {
      this.setState({ fileList })
    }
  }

  handleChange = e => {
    const { type = 'image', uploadName = '' } = this.props
    const formData = new FormData()
    const { files } = e.currentTarget
    const type2 = files[0].type
    let imgUrl = ''
    const fileList = Array.from(files)
    if (fileList.length > 4) {
      this.setState({
        open: true,
        message: '上传文件数量不能超过4个',
        value: '',
      })
      return
    }
    if (type === 'image') {
      const typeList = fileList.filter(item => {
        if (type2 === 'image/png' || type2 === 'image/jpeg' || type2 === 'image/jpg') {
        } else {
          this.setState({
            open: true,
            message: '上传图片格式只能是jpg/jpeg/png',
            value: '',
          })
          return item
        }
      })
      const sizeList = fileList.filter(item => {
        if (item.size / 1024 / 1024 > 10) {
          this.setState({
            open: true,
            message: '上传文件大小不能超过10M',
            value: '',
          })
          return item
        }
      })
      console.log('files', typeList, sizeList)
      if (typeList.length < 1 && sizeList.length < 1) {
        if (files[0]) {
          imgUrl = URL.createObjectURL(files[0])
        }
        this.props.uploadChange({ fileList, uploadName })
        for (const key in this.state.image) {
          formData.append(key, fileList)
        }

        // fetch('/api/uploads', {
        //   method: 'POST',
        //   body: formData,
        //     headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // });
        this.setState({ fileList, imgUrl })
      } else {
      }
    } else {
      this.setState({ fileList })
    }
  }

  // 消息提示
  handleClose = () => {
    this.setState({ open: false })
  }

  // 删除上传文件
  handleUplaodClose = ({ target: index }) => {
    const { fileList } = this.state
    fileList.splice(index, 1)
    this.setState({ fileList, value: '' })
  }

  // 图片模态框
  handleClose2 = () => {
    this.setState({ open2: false })
  }

  // 查看实例
  viewFile = ({ target: name }) => {
    this.setState({ open2: true })
  }

  render() {
    const { message, open, open2, value, imgUrl, fileList } = this.state

    const {
      msgClose,
      uploadClose = false,
      disabled = false,
      fileName = true,
      viewFile = false,
      view = '查看',
      name = '新增',
    } = this.props
    const action = () => {
      if (msgClose) {
        return [
          <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
            <CloseIcon />
          </IconButton>,
        ]
      }
      return []
    }
    return (
      // TODO：上传文件接收的文件类型？
      <div className="uploadBox">
        <div style={{ margin: '15px 0' }}>
          <Button
            disabled={disabled}
            variant="contained"
            style={{
              position: 'relative',
              marginRight: '10px',
              overflow: 'hidden',
            }}
          >
            <input
              type="file"
              name="image"
              multiple="multiple"
              value={value}
              className="uploadFile"
              onChange={this.handleChange}
            />
            {name}
          </Button>
          {viewFile && (
            <Button variant="contained" onClick={this.viewFile}>
              {view}
            </Button>
          )}
        </div>

        {fileName &&
          fileList.map((item, index) => {
            return (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <span title={item.name} className="fileName">
                  {item.name}
                </span>
                <p className="view" onClick={this.viewFile} style={{ margin: '0 10px' }}>
                  {view}
                </p>

                {uploadClose && (
                  <IconButton
                    key="close"
                    aria-label="close"
                    color="primary"
                    index={index}
                    size="small"
                    onClick={this.handleUplaodClose}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              </div>
            )
          })}

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={open}
          style={{ background: '#09f' }}
          autoHideDuration={4000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={action()}
        />
        <Dialog maxWidth="lg" onClose={this.handleClose2} aria-labelledby="customized-dialog-title" open={open2}>
          <MuiDialogTitle
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            id="customized-dialog-title"
          >
            <span>{view}</span>
            {/* <IconButton aria-label="close"  onClick={this.handleClose2}>
                            <CloseIcon />
                        </IconButton> */}
          </MuiDialogTitle>
          <MuiDialogContent style={{ minWidth: '600px', minHeight: '400px' }}>
            <img src={imgUrl} />
          </MuiDialogContent>
        </Dialog>
      </div>
    )
  }
}
export default withStyles(styles, { name: 'multiUpload' })(Upload)
