import React, { Component } from 'react'
import { Button, Input, Select, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { fetching } from '../../helpers/utils'

const styles = theme => ({
  select: {
    padding: 20,
  },
})

// 实现3级联动读取省市县地址
class Dialog2 extends Component {
  state = {
    open: false,
    address: {
      province: '',
      city: '',
      district: '',
    },
    data: [],
    provinces: [],
    cities: [],
    districts: [],
  }

  async componentDidMount() {
    const data = await fetching(`/data/address`)
    this.setState(() => {
      const provinces = Object.keys(data)
      return { data, provinces }
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleChange = e => {
    const selected = e.target.value
    const level = e.target.id

    if (level === 'province') {
      const cities = Object.keys(this.state.data[selected])
      this.setState({ address: { [level]: selected }, cities, districts: [] })
    } else if (level === 'city') {
      const districts = this.state.data[this.state.address.province][selected]
      this.setState({ address: { ...this.state.address, [level]: selected }, districts })
    } else {
      // district
      this.setState({ address: { ...this.state.address, [level]: selected } })
    }
  }

  handleSubmit = () => {
    // const {address} = this.state;
    // this.props.onCreate(address);
  }

  render() {
    const { classes } = this.props
    const { province, city, district } = this.state.address
    const { open, provinces, cities, districts } = this.state
    return (
      <div>
        <Button onClick={this.handleClickOpen}>地址级联表单处理</Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={this.handleClose}>
          <DialogTitle>地址级联表单处理</DialogTitle>
          <DialogContent>
            <form>
              <Select
                native
                value={province}
                onChange={this.handleChange}
                input={<Input id="province" />}
                className={classes.select}
              >
                <option value="0">--- 请选择省份 ---</option>
                {provinces.map(p => (
                  <option value={p} key={p}>
                    {p}
                  </option>
                ))}
              </Select>
              <br />
              <Select
                native
                value={city}
                onChange={this.handleChange}
                input={<Input id="city" />}
                className={classes.select}
              >
                <option value="0">--- 请选择城市 ---</option>
                {cities.map(c => (
                  <option value={c} key={c}>
                    {c}
                  </option>
                ))}
              </Select>
              <br />
              <Select
                native
                value={district}
                onChange={this.handleChange}
                input={<Input id="district" />}
                className={classes.select}
              >
                <option value="0">--- 请选择区/县 ---</option>
                {districts.map(d => (
                  <option value={d} key={d}>
                    {d}
                  </option>
                ))}
              </Select>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              取消
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              提交
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles, { name: 'form2' })(Dialog2)
