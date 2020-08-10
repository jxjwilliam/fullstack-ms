import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import {
  ChromeReaderMode,
  Warning,
  WrapText,
  Textsms,
  FilterVintage,
  TrackChanges,
  Description,
  PersonPin,
  Message,
} from '@material-ui/icons';
import {
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';
import {TabPanels} from '../../components'

export default function() {
  const ary = [
    '贷后基础管理',
    '贷后定期管理',
    '贷后实时管理',
    '贷后流程管理',
  ];

  const ary1 = [
    {
      path: "贷后基础管理",
      icon: WrapText
    },
    {
      path: "贷后定期管理",
      icon: Textsms
    },
    {
      path: "贷后实时管理",
      icon: FilterVintage
    },
    {
      path: "贷后流程管理",
      icon: ChromeReaderMode
    }
  ];

  const subAry1 = [
    {
      path: "贷后基础条件管理",
      icon: WrapText
    },
    {
      path: "短息提示信息维护",
      icon: Textsms
    },
    {
      path: "问题资产清处置信息",
      icon: FilterVintage
    },
  ];
  const subAry2 = [
    {
      path: "财务报表管理",
      icon: TrackChanges
    },
    {
      path: "定期检查",
      icon: Description
    },
  ];
  const subAry3 = [
    {
      path: "风险分类",
      icon: WrapText
    },
    {
      path: "风险提示及反馈",
      icon: Textsms
    },
    {
      path: "逾期欠息查询",
      icon: FilterVintage
    },
    {
      path: "合账管理",
      icon: ChromeReaderMode
    }
  ];
  const subAry4 = [
    {
      path: "贷后实时风险分类",
      icon: PersonPin
    },
    {
      path: "贷后实时预警管理",
      icon: Message
    },
    {
      path: "贷后定期管理",
      icon: ChromeReaderMode
    }
  ];

  return <TabPanels ary={ary}/>;
}

// const Collapse1 = (ary) => {
//   const list = ary.map(item => {
//     const CompIcon = item.icon;
//     return (
//       <ListItem
//         button
//         className={classes.nested}
//         component={Link}
//         to={`${PARENT_PATH}/${item.path}`}
//         key={item.path}
//       >
//         <ListItemIcon>
//           <CompIcon />
//         </ListItemIcon>
//         <ListItemText primary={item.path}/>
//       </ListItem>
//     )
//   });
//
//   return (
//     <Collapse in={open} timeout="auto" unmountOnExit>
//       <List component="div" disablePadding>
//         {list}
//       </List>
//     </Collapse>
//   );
// }


// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

// export default function NestedList() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//
//   const handleClick = () => {
//     setOpen(!open);
//   };
//
//   return (
//     <List component="nav">
//       <ListItem button onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inbox"/>
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItem>
//
//     </List>
//   )
// }

