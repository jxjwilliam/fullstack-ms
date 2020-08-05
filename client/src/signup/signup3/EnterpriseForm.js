import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

export default function EnterpriseForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="enterprise_name"
            name="enterprise_name"
            label="企业名称"
            fullWidth
            autoComplete="on"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cell"
            name="csll"
            label="手机号"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="设置密码"
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="validate_code"
            name="validate_code"
            label="确认密码"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="graph_validate_code"
            name="graph_validate_code"
            label="图形验证码"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cell_validate_code"
            name="cell_validate_code"
            label="手机验证码"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="invite_cell_code"
            name="invite_cell_code"
            label="邀请手机号或邀请码"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            justifyContent="flex-start"
            control={<Checkbox color="secondary" name="invite_cell_code" value="yes"/>}
            label="无邀请人"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}