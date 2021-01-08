import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core'

const NewsAPI = require('newsapi')

const newsapi = new NewsAPI('385ab8a7f7d94d8ab652bba886b440e3')

const config = {
  url: 'https://newsapi.org/account',
  api: '385ab8a7f7d94d8ab652bba886b440e3',
}

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.spacing(4),
  },
}))

// use iframe + 3rd react-app
export default function () {
  const style = { border: 0, width: '80vw', height: '80vh', frameborde: 0, seamless: 'seamless' }
  return <iframe src="http://localhost:5000/" style={style} title="newsapi" />
}

// access-denied. Use `bff` proxy instead.
export function CorsBlock() {
  const classes = useStyles()
  const [news, setNews] = useState({})

  useEffect(() => {
    newsapi.v2
      .topHeadlines({
        q: 'trump',
        category: 'politics',
        language: 'en',
        country: 'us',
      })
      .then(response => {
        console.log(response)

        setNews(response.articles)
        /*
        {
          status: "ok",
          articles: [...]
        }
      */
      })
  }, [])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2">
          {JSON.stringify(news, null, 4)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  )
}
