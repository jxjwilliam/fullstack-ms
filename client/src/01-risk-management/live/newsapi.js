import React, {useEffect, useState} from 'react'
import { makeStyles} from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('385ab8a7f7d94d8ab652bba886b440e3');

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
export default function() {
  return (
    <iframe src="http://localhost:3001/" style={{border: 0, width: "100vh", height: "80vh"}}></iframe>
  )
}

// Use `bff` proxy instead.
export function CorsBlock () {
  const classes = useStyles()
  const [news, setNews] = useState({})

  useEffect( () => {
    newsapi.v2.topHeadlines({
      q: 'trump',
      category: 'politics',
      language: 'en',
      country: 'us'
    }).then(response => {
      console.log(response);

      setNews(response.articles)
      /*
        {
          status: "ok",
          articles: [...]
        }
      */
    });  }, [])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color={'textSecondary'} gutterBottom variant={"body2"}>
          {JSON.stringify(news, null, 4)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  )
}


// // To query everything
// // You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'trump',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk,techcrunch.com',
//   from: '2017-12-01',
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
//
// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });
