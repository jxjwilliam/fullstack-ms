import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {
  CssBaseline,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Container,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import {makeStyles} from '@material-ui/core/styles';
import { checkout_form} from './formStatic'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  Card: {
    cursor: 'pointer',
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    id: 1,
    title: checkout_form.signup1,
    description: [checkout_form.register],
    buttonText: checkout_form.register,
    buttonVariant: 'outlined',
  },
  {
    id: 2,
    title: checkout_form.signup2,
    description: [checkout_form.register],
    buttonText: checkout_form.register,
    buttonVariant: 'contained',
  },
  {
    id: 3,
    title: checkout_form.signup3,
    description: [checkout_form.register],
    buttonText: checkout_form.register,
    buttonVariant: 'outlined',
  },
];

export default function Checkout() {
  const classes = useStyles();
  const [type, setType] = useState(0)

  if (type === '1') {
    return <Redirect to='/signup/供应商'/>
  }
  else if (type === '2') {
    return <Redirect to='/signup/盟信系统'/>
  }
  else if (type === '3') {
    return <Redirect to='/signup/核心企业' />
  }

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {checkout_form.title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        {checkout_form.desc}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card id={tier.id} onClick={(e) => setType(e.currentTarget.id)} style={{cursor: "pointer"}}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{align: 'center'}}
                  subheaderTypographyProps={{align: 'center'}}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
}
