import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
import Breadcrumb1 from './Breadcrumbs'
const theme = createMuiTheme();

// import Box from '@material-ui/core/Box';
const Box = styled.div`${palette}${spacing}${typography}`;

//  Material-UI uses both ThemeProvider. So you can access the theme in your styled components.
export default function ({ path }) {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Box
          color="primary.main"
          bgcolor="background.paper"
          fontFamily="h6.fontFamily"
          fontSize='h6.fontSize'
        >
          <Breadcrumb1 path={path} />
        </Box>
      </ThemeProvider>
    </NoSsr>
  );
}
