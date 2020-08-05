import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

export default function MoreInfoForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="operator_email"
            name="operator_email"
            label="经办人邮箱"
            fullWidth
            autoComplete="on"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="registry_address"
            name="registry_address"
            label="注册地址"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="contact_address"
            name="contact_address"
            label="通讯地址"
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Typography variant="h6" gutterBottom>
          以下信息为开具增值税发票所用，请确保与税务部门备案一致
        </Typography>
        <Grid item xs={12}>
          <TextField
            id="enterprise_fullName"
            name="enterprise_fullName"
            label="企业全称"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="TIN"
            name="TIN"
            label="纳税人识别号"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="地址"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cell"
            name="cell"
            label="电话"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="bank"
            name="bank"
            label="开户银行"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="bank_account"
            name="bank_account"
            label="开户银行账号"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Typography variant="h6" gutterBottom>
          以下信息为寄送发票所用，请确保准确
        </Typography>
        <Grid item xs={12}>
          <TextField
            required
            id="enterprise_fullName"
            name="enterprise_fullName"
            label="企业全称"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="receiver_name"
            name="receiver_name"
            label="收信人姓名"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="receiver_cell"
            name="receiver_cell"
            label="收信人电话"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cell"
            name="cell"
            label="电话"
            fullWidth
            autoComplete="off"
          />
        </Grid>


      </Grid>
    </React.Fragment>
  );
}