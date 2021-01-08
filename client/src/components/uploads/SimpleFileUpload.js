import React, { Component } from 'react'

/**
 * Node Express for file upload management with Postgres and Sequelize
 * https://www.codementor.io/dhananjaykumar/node-express-for-file-upload-management-with-postgres-and-sequelize-y230no8rc
 */
export default class extends Component {
  state = { image: '' }

  handleFileChange = e => {
    this.setState({
      [e.target.name]: e.target.files[0],
    })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const formData = new FormData()
    for (const name in this.state) {
      formData.append(name, this.state[name])
    }

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    alert('done')
  }

  render() {
    return (
      <>
        <h2>单个文件上传</h2>
        <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
          <label>选择上传文件:</label>
          <input name="image" type="file" onChange={this.handleFileChange} />
          <button type="submit">上传！</button>
        </form>
      </>
    )
  }
}
