import React, {createElement, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemIcon,
  Divider
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
  SupervisorAccount as SupervisorAccountIcon,
  History as HistoryIcon,
  Help as HelpIcon,
} from '@material-ui/icons';
import { loginInfos } from '../../helpers/utils';
import { Emails, Contacts} from "../../constants";
import { version } from '../../../package'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  wrap: {
    wordWrap: 'break-word', /*允许长单词换行到下一行*/
    wordBreak: 'break-all', /*这个参数根据需要来决定要不要*/
    overflow: 'hidden',
    whiteSpace: 'normal'
  },
}));

// Accordion1
function Accordion1({ title='', icon=HistoryIcon, info=[] }) {
  const classes = useStyles();
  const Icon = icon
  return (
    <div className={classes.root}>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="accordion1-content"
          id={title}
        >
          <ListItemIcon>
            <Icon/>
          </ListItemIcon>
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <List>
            {info}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function Typography1 (props) {
  const classes = useStyles()
  return <Typography variant="body1" gutterBottom className={classes.wrap} {...props} />
}

function getOperatorInfo () {
  const { account='测试用户', name='微服务', organization={name:'微服务企业'}, roles=[{name:'操作员'}] } = loginInfos();
  const rolesNames = roles.map(r => r.name).join(',') || ''
  const title = '操作员信息'
  const icon = SupervisorAccountIcon

  const aryInfo = [
    `企业：${organization.name}`,
    `账号：${account}`,
    `名称：${name}`,
    `角色：${rolesNames}`
  ].map(item => <Typography1 key={item}>{item}</Typography1>)

  return (
    <Fragment>
      <Accordion1 title={title} icon={icon} info={aryInfo}/>
    </Fragment>
  )
}

function getHelperInfo () {
  const title = '获取帮助';
  const icon = HelpIcon
  const aryInfo = [
    `技术支持部: `,
    ` ☎ ${Contacts.office}`,
    ` 📧 ${Emails.support}`,
    `市场部: `,
    ` ☎ ${Contacts.business}`,
    ` 📧 ${Emails.admin}`
  ].map(item => <Typography1 key={item}>{item}</Typography1>)

  return <Accordion1 title={title} icon={icon} info={aryInfo}/>
}

function getVersionInfo () {
  const title = '发行版本'
  const icon = HistoryIcon
  const aryInfo = [
    `当前版本: `,
    `‍🚀 ${version}`,
  ]

  return <Accordion1 title={title} icon={icon} info={aryInfo} />
}

function HideInfo () {
  const list = [SupervisorAccountIcon, HelpIcon, HelpIcon].map((Icon, index) => (
    <Accordion defaultExpanded={true} key={index}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
    </Accordion>
  ))
  return <Fragment><Divider />{list}</Fragment>
}

export {
  getOperatorInfo,
  getHelperInfo,
  HideInfo
}
