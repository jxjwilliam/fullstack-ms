import React, {Component} from 'react';

export default class extends Component {
  state = {images: ''};

  handleFileChange = e => {
    this.setState({
      'images': Array.from(e.target.files),
    })
  };

  handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    for (let name in this.state) {
      formData.append(name, this.state[name]);
    }

    await fetch('/api/uploads', {
      method: 'POST',
      body: formData,
    });

    alert('done');
  };

  render() {
    return (
      <>
      <h2>多文件上传</h2>
      <form
        onSubmit={this.handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <label htmlFor="file">选择上传文件（最多4个）:</label>
        <input
          type="file"
          multiple
          required
          accept="image/*"
          name="images"
          id="file"
          onChange={this.handleFileChange}
        />
        <span>上传文件类型: jpg, jpeg, png.</span>
        <button type="submit">上传！</button>
      </form>
      </>
    )
  }
}
