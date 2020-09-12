import React, {useEffect, useState} from 'react'
import { makeStyles} from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import {DataPrint} from "../../helpers/utils";

const config = {
  address: "9727 152b Street, Surrey Bc Canada",
  latitude: 49.113331,
  longitude: -122.798828,
  openweathermap_key: '3ea51757f74c023742bd03691ad3895b',
  openweathermap_api: 'api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&APPID=3ea51757f74c023742bd03691ad3895b'
}

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.spacing(4),
  },
}))

// https://www.npmjs.com/package/react-open-weather
export default function LocalWeather() {
  const {openweathermap_key: key} = config
  return (
    <>
      <ReactWeather
        forecast="5days"
        apikey={key}
        type="city"
        city="Vancouver"
        lang="cn"
      />
      {/*<Weather/>*/}
    </>
  )
}

/**
 * works version. need parse {}: https://openweathermap.org/api/one-call-api
 */
export function Weather () {
  const classes = useStyles()
  const [weather, setWeather] = useState({})

  useEffect( () => {
    const {latitude, longitude, openweathermap_key: key} = config
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${key}`)
      .then(data => data.json())
      .then(info => setWeather(info))
      .catch(error => {
        throw new Error(error)
      })
  }, [])

  return (
    <>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color={'textSecondary'} gutterBottom variant={"body2"}>
          Weather
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
    <DataPrint data={weather}/>
    </>
  )
}

