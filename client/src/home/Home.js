import React from 'react';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';
import { bars, footers } from '../components'
import HomeDemo from './demo'

/**
 * Header, Main, Footer
 */
export default function () {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <bars.Bar1>
            {/*TODO: children*/}
        </bars.Bar1>
        <HomeDemo />
        <footers.Footer1 />
      </Container>
    </>
  )
}
