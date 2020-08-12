import React from "react";
import {Link, Typography} from "@material-ui/core";
import {version} from '../../../package.json';

// +Date.now(),  date '+%F %T': 2020-03-28 18:59:05
// 发布于 ${moment(__DATE_TIME__).format('YYYY-MM-DD, HH:mm:ss')}。
export default function ({opt}) {
  opt = opt || 'subtitle1';
  return (
    <Typography component="span" variant={opt} color="textPrimary" align="center">
      版权所有 Copyright ©
      <Link color="inherit" href="http://www.bestitconsulting.com/">
        Best IT Consulting Ltd.
      </Link>
      {` 当前版本 ${version}，${new Date().getFullYear()}年。`}
    </Typography>
  );
};
