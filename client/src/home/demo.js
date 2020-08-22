import React from 'react'
import { Box, Card, CardContent, Typography } from '@material-ui/core'
import { Menu1, Emoji, ProTip } from '../components'
import { GeneralRouters } from '../routers'
import { LocaleContext } from '../locales'
import cn from '../locales/cn.json'
import en from '../locales/en.json'

export default function () {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        <Menu1 routers={GeneralRouters} title="Menu" />
      </Typography>
      <LocaleContext.Consumer>
        {({ locale }) => {
          const json = locale.startsWith('E') ? en : cn
          const { header, text, tip } = json
          /**
           * TODO:
           * const jsonPath = `locales/${json}.json`
           * const { header, text, tip } = require(jsonPath)
           */
          return (
            <>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {header}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {text}
                  </Typography>
                </CardContent>
              </Card>
              <ProTip tip={tip} />
            </>
          )
        }}
      </LocaleContext.Consumer>
      <Emoji symbol="🇨🇳💪🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝" />
    </Box>
  )
}
