import React from 'react';
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
  Business as BusinessIcon,
  FormatListBulleted,
  AssignmentTurnedIn,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

/**
 * props: auth: {loggedIn: true, loginInfo, token}
 */
function A1(props) {
  const classes = useStyles();
  if(!props.auth || !props.auth.loginInfo) return null;
  const {account, id, name, oid, oname, rid} = props.auth.loginInfo;
  const roleNames = rid.map(r => r.name).join(',');
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <Typography className={classes.heading}>操作员信息</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            <ListItem button component={Link} to={`/layout/profile`} key={0}>
              <ListItemText primary={`组织：${oname}`}/>
            </ListItem>
            <ListItem button component={Link} to={`/layout/profile`} key={1}>
              <ListItemText primary={`账号：${account}`}/>
            </ListItem>
            <ListItem button component={Link} to={`/layout/profile`} key={2}>
              <ListItemText primary={`名称：${name}`}/>
            </ListItem>
            <ListItem button component={Link} to={`/layout/profile`} key={3}>
              <ListItemText primary={`角色：${roleNames}`}/>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(A1)
