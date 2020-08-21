import React, { Fragment } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { menus, Emoji, ProTip } from '../components'
import { GeneralRouters } from "../routers";
import { LocaleContext } from '../locales'

export default function () {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        <menus.Menu1 routers={GeneralRouters} title='Menu' />
      </Typography>
      <LocaleContext.Consumer>
        {({ locale }) => {
          const jsonFile = (locale.startsWith('e') || locale.startsWith('E')) ? 'en' : 'cn';
          const obj = require(`../locales/${jsonFile}.json`)
          return (
            <Fragment>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {obj.header}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {obj.text}
                  </Typography>
                </CardContent>
              </Card>
              <ProTip tip={obj.tip} />
              {'\u2728'}{'\uD83C\uDDE8\uD83C\uDDF3'}{':flag_cn:'}
              <Emoji symbol={"🇨🇳"} label="🇨🇳" />
              <Emoji symbol={":cn:"} label="🇨🇳" />
              <Emoji symbol=":flag-cn:" label="🇨🇳" />
              <Emoji symbol=":flag_china:" label="🇨🇳" />
            </Fragment>
          )
        }}
      </LocaleContext.Consumer>
      <Emoji symbol="🇨🇳💪🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝" />
    </Box>
  )
}
