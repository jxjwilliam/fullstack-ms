import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab, } from '@material-ui/core'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Queries } from './config'
import { gql, useQuery, useMutation } from "@apollo/client";
import { Error, Loading, NotFound } from "../../components/misc";
// not work well: { TabContext, TabList, TabPanel } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    margin: theme.spacing(2)
  }
}));

function Card1({ data }) {
  const classes = useStyles()
  let info = data
  if (data.post) info = data.post
  if (data.user) info = data.user
  if (data.photo) info = data.photo
  if (data.posts) info = data.posts

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {info.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {info.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

/**
 * `useQuery` hook exposes `error`, `loading`, `data` to `children`.
 */
function LaunchQuery({ value }) {
  const [query, variables] = Queries[value]

  const { loading, error, data } = useQuery(gql`${query}`, {
    variables,
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!data) return <NotFound />

  return (
    <>
      <Card1 data={data} />
      <pre style={{ textAlign: 'initial' }}>
        <code>
          {JSON.stringify(data, null, 4)}
        </code>
      </pre>
    </>
  );
}

function LaunchMutation({ value }) {
  const [mutation, variables] = Queries[value]

  const [mutationAction, { loading, error, data }] = useMutation(gql`${mutation}`)

  mutationAction({ variables })

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!data) return <NotFound />

  return (
    <>
      {/*<Card1 data={data} />*/}
      <pre style={{ textAlign: 'initial' }}>
        <code>
          {JSON.stringify(data, null, 4)}
        </code>
      </pre>
    </>
  )
}

export default function ({ mapList }) {
  const classes = useStyles()
  const [tabs, setTabs] = useState(null)
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    let tabs = [];
    for (let [Icon, label] of mapList) {
      tabs.push(
        <Tab icon={<Icon />} label={label} key={label} />
      )
    }
    setTabs(tabs)
  }, [])

  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="secondary"
        >
          {tabs}
        </Tabs>
      </Paper>
      {value < 5 ? <LaunchQuery value={value} /> : <LaunchMutation value={value} />}
    </>
  )
}
