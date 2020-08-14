import React, {Fragment} from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { menus, Emoji, ProTip } from '../components'
import {GeneralRouters} from "../routers";

export default function () {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        <menus.Menu1 routers={GeneralRouters} />
      </Typography>
      <ProTip />
      <Emoji symbol="💪🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝" />
    </Box>
  )
}
