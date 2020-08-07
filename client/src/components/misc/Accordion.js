import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemIcon,
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
  SupervisorAccount as SupervisorAccountIcon,
  // history as HistoryIcon,
} from '@material-ui/icons';
import { loginInfos } from '../../helpers/reusable';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  wrap: {
    wordWrap: 'break-word', /*允许长单词换行到下一行*/
    wordBreak: 'break-all', /*这个参数根据需要来决定要不要*/
    overflow: 'hidden',
    whiteSpace: ' normal'
  },
}));

/**
 * props: auth: {loggedIn: true, loginInfo, token}
 */
function AuthMessage(props) {
  const classes = useStyles();

  // if (!props.auth || !props.auth.loginInfo) return null;

  let loginInfo = loginInfos();

  const { account='测试用户', name='微服务', organization = { name: '微服务企业' }, roles=[{name:'操作员'}] } = loginInfo;

  let rolesNames = '';
  try {
    rolesNames = roles.map(r => r.name).join(',');
  } catch (e) {
    rolesNames = '';
  }

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon>
            <SupervisorAccountIcon />
            {/* <HistoryIcon/> */}
          </ListItemIcon>
          <Typography className={classes.heading}>操作员信息</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <List style={{ width: '100%' }}>
            <Typography variant="body1" gutterBottom className={classes.wrap} style={{ whiteSpace: 'normal' }}>
              {`企业：${organization.name}`}
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.wrap} style={{ whiteSpace: 'normal' }}>
              {`账号：${account}`}
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.wrap} style={{ whiteSpace: 'normal' }}>
              {`名称：${name}`}
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.wrap} style={{ whiteSpace: 'normal' }}>
              {`角色：${rolesNames}`}
            </Typography>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AuthMessage)
