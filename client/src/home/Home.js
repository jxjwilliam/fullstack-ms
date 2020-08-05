import React from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  Link,
  Box,
} from '@material-ui/core';
import ProTip from './ProTip';
import {Menu, Drawer, bars, footers} from '../components'

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
        {props.symbol}
    </span>
);

/**
 * Header, Main, Footer
 */
export default function () {
  return (
    <>
    <CssBaseline/>
    <Container fixed>
      <bars.Bar1>

        <Drawer/>

        <Typography>
          <Link href="/home" color="inherit" variant="h6">主页面</Link>
        </Typography>

      </bars.Bar1>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          <Menu/>
        </Typography>
        <ProTip />
        <Emoji symbol="💪🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝"/>
      </Box>
      <footers.Footer1/>
    </Container>
    </>
  );
}

