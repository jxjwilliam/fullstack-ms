import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

// TODO: integrate with <Title/>
const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    padding: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ({path}) {
  const classes = useStyles();
  const [base, sub, current] = path.split('/').filter(s => !!s);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href={`/${base}`} className={classes.link}>
        <HomeIcon className={classes.icon} />
        {base}
      </Link>
      <Link color="inherit" href={`/${base}/${sub}`} className={classes.link}>
        <WhatshotIcon className={classes.icon} />
        {sub}
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        {current}
      </Typography>
    </Breadcrumbs>
  );
}
