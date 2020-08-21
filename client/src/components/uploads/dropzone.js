import React, { Component } from 'react'
import { DropzoneDialog } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button'

// https://github.com/Yuvaleros/material-ui-dropzone
export default class DropzoneDialogExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      files: [],
    }
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  handleSave(files) {
    // Saving files to state for further use and closing Modal.
    this.setState({
      files,
      open: false,
    })
  }

  handleOpen() {
    this.setState({
      open: true,
    })
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <Button onClick={this.handleOpen}>Add Image</Button>
        <DropzoneDialog
          open={open}
          onSave={this.handleSave}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews
          maxFileSize={5000000}
          onClose={this.handleClose}
        />
      </div>
    )
  }
}
