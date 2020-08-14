import { createMuiTheme } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';

// A custom theme for this app
export default createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
