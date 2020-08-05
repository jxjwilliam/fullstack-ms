import React from 'react';
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function CertificationForm() {
  const classes = useStyles();
  const [certificateValue, setCertificateValue] = React.useState('是');
  const [organizationTypeValue, setOrganizationTypeValue] = React.useState('corporate_enterprise');
  const handleChangeCertificate = event => {
    setCertificateValue(event.target.value);
  };
  const handleChangeOrganizationType = event => {
    setOrganizationTypeValue(event.target.value);
  };
  const [selectedBusinessLicenseDateStart, setSelectedBusinessLicenseDateStart] = React.useState(new Date('2014-08-18T21:11:54'));
  const [selectedBusinessLicenseDateEnd, setSelectedBusinessLicenseDateEnd] = React.useState(new Date('2014-08-18T21:11:54'));

  const [selectedLegalRepresentativeDateStart, setSelectedLegalRepresentativeDateStart] = React.useState(new Date('2014-08-18T21:11:54'));
  const [selectedLegalRepresentativeDateEnd, setSelectedLegalRepresentativeDateEnd] = React.useState(new Date('2014-08-18T21:11:54'));

  const [selectedOperatorDateStart, setSelectedOperatorDateStart] = React.useState(new Date('2014-08-18T21:11:54'));
  const [selectedOperatorDateEnd, setSelectedOperatorDateEnd] = React.useState(new Date('2014-08-18T21:11:54'));


  const handleBusinessLicenseDateChangeStart = date => {
    setSelectedBusinessLicenseDateStart(date);
  };
  const handleBusinessLicenseDateChangeEnd = date => {
    setSelectedBusinessLicenseDateEnd(date);
  };

  const handleLegalRepresentativeDateChangeStart = date => {
    setSelectedLegalRepresentativeDateStart(date);
  };
  const handleLegalRepresentativeDateChangeEnd = date => {
    setSelectedLegalRepresentativeDateEnd(date);
  };

  const handleOperatorDateChangeStart = date => {
    setSelectedOperatorDateStart(date);
  };
  const handleOperatorDateChangeEnd = date => {
    setSelectedOperatorDateEnd(date);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        实名认证
      </Typography>
      <Button variant="contained" className={classes.button}>
        资料清单下载
      </Button>
      <Button variant="contained" className={classes.button}>
        暂时保存
      </Button>
      <Typography variant="h6" gutterBottom>
        （所有附件上传要加盖企业公章，以扫描或拍照方式确保企业公章为红色，附件支持图片或者PDF文件）
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormLabel required>三证合一</FormLabel>
          <RadioGroup aria-label="certificate_3_in_1" name="certificate_3_in_1" value={certificateValue} onChange={handleChangeCertificate}>
            <FormControlLabel value="是" control={<Radio />} label="是" />
            <FormControlLabel value="否" control={<Radio />} label="否" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <FormLabel required>机构类型</FormLabel>
          <RadioGroup aria-label="organization_type" name="organization_type" value={organizationTypeValue} onChange={handleChangeOrganizationType}>
            <FormControlLabel value="corporate_enterprise" control={<Radio />} label="法人企业" />
            <FormControlLabel value="unincorporated_enterprise" control={<Radio />} label="非法人企业" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="unified_social_credit_code"
            name="unified_social_credit_code"
            label="统一社会信用代码"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <FormLabel required>营业执照证件有效期</FormLabel>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="选择开始日期"
                value={selectedBusinessLicenseDateStart}
                onChange={handleBusinessLicenseDateChangeStart}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                xs={4}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="选择结束日期"
                value={selectedBusinessLicenseDateEnd}
                onChange={handleBusinessLicenseDateChangeEnd}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                xs={4}
              />
              <FormControlLabel
                control={
                  <Checkbox />
                }
                label="长期"
                xs={2}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="account_approval_no"
            name="account_approval_no"
            label="开户许可证核准号"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="legal_representative_name"
            name="legal_representative_name"
            label="法定代表人姓名"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="legal_representative_certificate_no"
            name="legal_representative_certificate_no"
            label="法定代表人证件号"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <FormLabel required>法定代表人证件有效期</FormLabel>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="选择开始日期"
                value={selectedLegalRepresentativeDateStart}
                onChange={handleLegalRepresentativeDateChangeStart}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="选择结束日期"
                value={selectedLegalRepresentativeDateEnd}
                onChange={handleLegalRepresentativeDateChangeEnd}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox />
                }
                label="长期"
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="operator_name"
            name="operator_name"
            label="经办人姓名"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="operator_certificate_no"
            name="operator_certificate_no"
            label="经办人证件号"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <FormLabel required>经办人证件有效期</FormLabel>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="选择开始日期"
                value={selectedOperatorDateStart}
                onChange={handleOperatorDateChangeStart}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="选择结束日期"
                value={selectedOperatorDateEnd}
                onChange={handleOperatorDateChangeEnd}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox />
                }
                label="长期"
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}